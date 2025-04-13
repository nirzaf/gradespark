// Mock Supabase client for compatibility
// This file provides a mock implementation to maintain compatibility
// while removing the actual Supabase dependency

// Define a mock client interface that matches the basic Supabase structure
const mockClient = {
  from: (table: string) => ({
    select: () => ({
      eq: () => ({
        data: null,
        error: null,
      }),
      data: null,
      error: null,
    }),
    insert: () => ({
      data: null,
      error: null,
    }),
    update: () => ({
      eq: () => ({
        data: null,
        error: null,
      }),
      data: null,
      error: null,
    }),
    delete: () => ({
      eq: () => ({
        data: null,
        error: null,
      }),
      data: null,
      error: null,
    }),
  }),
  auth: {
    signIn: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
  storage: {
    from: () => ({
      upload: () => Promise.resolve({ data: null, error: null }),
      getPublicUrl: () => ({ data: { publicUrl: '' } }),
    }),
  },
};

// Export the mock client
export const supabase = mockClient;
