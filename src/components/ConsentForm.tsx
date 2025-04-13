import { useState, useEffect } from 'react';

interface ConsentPreferences {
  marketing_consent: boolean;
  analytics_consent: boolean;
  functional_consent: boolean;
}

const ConsentForm = () => {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    marketing_consent: false,
    analytics_consent: false,
    functional_consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load preferences from localStorage on component mount
    const loadExistingPreferences = () => {
      try {
        const localPreferences = localStorage.getItem('consentPreferences');
        if (localPreferences) {
          const parsed = JSON.parse(localPreferences);
          setPreferences({
            marketing_consent: parsed.marketing_consent || false,
            analytics_consent: parsed.analytics_consent || false,
            functional_consent: parsed.functional_consent || false,
          });
        }
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    };

    loadExistingPreferences();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      // Save to localStorage
      localStorage.setItem('consentPreferences', JSON.stringify({
        marketing_consent: preferences.marketing_consent,
        analytics_consent: preferences.analytics_consent,
        functional_consent: preferences.functional_consent,
        updated_at: new Date().toISOString(),
      }));

      // Log the saved preferences (for demonstration)
      console.log('Consent preferences saved:', {
        ...preferences,
        updated_at: new Date().toISOString(),
      });

      setMessage('Preferences saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving preferences:', error);
      setMessage('Failed to save preferences. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Privacy Preferences</h2>
      
      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="functional"
                name="functional_consent"
                type="checkbox"
                checked={preferences.functional_consent}
                onChange={(e) => setPreferences({
                  ...preferences,
                  functional_consent: e.target.checked
                })}
                className="h-4 w-4 text-celeste border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="functional" className="font-medium text-night">Functional Cookies</label>
              <p className="text-gray-500">These cookies are necessary for the website to function and cannot be switched off.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="analytics"
                name="analytics_consent"
                type="checkbox"
                checked={preferences.analytics_consent}
                onChange={(e) => setPreferences({
                  ...preferences,
                  analytics_consent: e.target.checked
                })}
                className="h-4 w-4 text-celeste border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="analytics" className="font-medium text-night">Analytics Cookies</label>
              <p className="text-gray-500">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="marketing"
                name="marketing_consent"
                type="checkbox"
                checked={preferences.marketing_consent}
                onChange={(e) => setPreferences({
                  ...preferences,
                  marketing_consent: e.target.checked
                })}
                className="h-4 w-4 text-celeste border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="marketing" className="font-medium text-night">Marketing Cookies</label>
              <p className="text-gray-500">These cookies may be set by our advertising partners to build a profile of your interests and show you relevant ads.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-night hover:bg-night-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-celeste ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Saving...' : 'Save Preferences'}
          </button>
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          For more information about how we use cookies and your personal data, please read our{' '}
          <a href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ConsentForm; 