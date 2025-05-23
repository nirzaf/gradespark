import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  const action = req.query.action as string;
  const baserowApiKey = process.env.BASEROW_API_KEY;

  if (!baserowApiKey) {
    console.error('BASEROW_API_KEY is not set');
    return res.status(500).json({ success: false, error: 'Server configuration error' });
  }

  if (action === 'upload') {
    // Handle file upload
    const baserowUploadUrl = 'https://api.baserow.io/api/user-files/upload-file/';
    try {
      // Vercel automatically parses multipart/form-data for us if the content type is correct.
      // However, we need to forward the raw body or reconstruct the FormData.
      // For Vercel, the `req` object itself is a stream. We can pipe it.
      // The client will send FormData, and Baserow expects multipart/form-data.

      const clientContentType = req.headers['content-type'];
      if (!clientContentType || !clientContentType.startsWith('multipart/form-data')) {
        return res.status(400).json({ success: false, error: 'Content-Type must be multipart/form-data for uploads' });
      }

      // Forward the request body directly.
      // We also need to forward the Content-Type header, including the boundary.
      const response = await fetch(baserowUploadUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${baserowApiKey}`,
          'Content-Type': clientContentType, // Forward client's content type (includes boundary)
        },
        body: req.body, // req.body should be a Buffer or stream
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Baserow file upload error:', responseData);
        return res.status(response.status).json({ success: false, error: 'Failed to upload file to Baserow', details: responseData });
      }

      return res.status(200).json({ success: true, data: responseData });

    } catch (error: any) {
      console.error('Error handling file upload:', error);
      return res.status(500).json({ success: false, error: 'Internal server error during file upload', details: error.message });
    }

  } else if (action === 'submit') {
    // Handle form submission
    const baserowSubmitUrl = `https://api.baserow.io/api/database/rows/table/507918/?user_field_names=true`;
    try {
      // Assuming the client sends JSON data for form submission
      const formData = req.body; // Vercel parses JSON body by default if Content-Type is application/json

      const response = await fetch(baserowSubmitUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${baserowApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Baserow form submission error:', responseData);
        return res.status(response.status).json({ success: false, error: 'Failed to submit form to Baserow', details: responseData });
      }

      return res.status(200).json({ success: true, data: responseData });

    } catch (error: any) {
      console.error('Error handling form submission:', error);
      return res.status(500).json({ success: false, error: 'Internal server error during form submission', details: error.message });
    }

  } else {
    return res.status(400).json({ success: false, error: 'Invalid action parameter. Use "upload" or "submit".' });
  }
}
