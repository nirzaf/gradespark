// Visitor tracking without Supabase dependency

interface VisitorData {
  visitor_id: string;
  ip_address?: string;
  location?: {
    country?: string;
    city?: string;
    region?: string;
  };
  user_agent: string;
  visit_count: number;
  last_visit: string;
}

// Generate a unique visitor ID using timestamp and random string
function generateVisitorId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Array of IP lookup services to try
const IP_SERVICES = [
  'https://api.ipgeolocation.io/getip'
];

// Fetch IP address in the background
async function getIpAddress(): Promise<string | undefined> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  
  try {
    const promises = IP_SERVICES.map(service =>
      fetch(service, {
        signal: controller.signal,
        headers: { 
          'Accept': 'application/json'
        }
      })
      .then(async response => {
        if (!response.ok) throw new Error('Service unavailable');
        const data = await response.json();
        return data.ip || data.ipAddress;
      })
      .catch(() => null)
    );

    const results = await Promise.race([
      Promise.all(promises),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000))
    ]);

    clearTimeout(timeoutId);

    if (Array.isArray(results)) {
      const ip = results.find(result => result !== null);
      return ip || undefined;
    }
    
    return undefined;
  } catch (error) {
    console.log('IP lookup failed silently');
    return undefined;
  }
}

// Fetch location data in the background
async function getLocationData(ip: string): Promise<VisitorData['location'] | undefined> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(`https://api.iplocation.net/?ip=${ip}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) return undefined;
    
    const data = await response.json();
    
    return {
      country: data.country_name,
      city: undefined,
      region: undefined
    };
  } catch (error) {
    return undefined;
  }
}

// Main tracking function that doesn't block
export function trackVisitor() {
  // Generate visitor ID immediately
  const visitorId = generateVisitorId();
  
  // Store visitor ID in localStorage if not already present
  if (!localStorage.getItem('visitor_id')) {
    localStorage.setItem('visitor_id', visitorId);
  }

  // Get visit count from localStorage
  const visitCount = parseInt(localStorage.getItem(`visit_count_${visitorId}`) || '0', 10);

  // Store visit count in localStorage
  localStorage.setItem(`visit_count_${visitorId}`, (visitCount + 1).toString());

  // Fetch additional data in the background
  Promise.all([
    getIpAddress(),
  ]).then(async ([ipAddress]) => {
    if (!ipAddress) return;

    // Get location data only if we have an IP
    const locationData = await getLocationData(ipAddress);
    
    // Log visitor data to console
    console.log('Visitor tracked:', {
      visitor_id: visitorId,
      ip_address: ipAddress,
      location: locationData,
      user_agent: navigator.userAgent,
      visit_count: visitCount + 1,
      last_visit: new Date().toISOString()
    });
  });
}
