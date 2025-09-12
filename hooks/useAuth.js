import { useState, useEffect, useCallback } from 'react';
import { getSupabaseClient } from '../lib/supabaseClient';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const supabase = getSupabaseClient();
  // Initialize auth state
  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error getting session:', error);
          setError(error.message);
        } else {
          setUser(session?.user || null);
        }
      } catch (err) {
        console.error('Error in getInitialSession:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
        
        if (event === 'SIGNED_OUT') {
          setError(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  // Login with email and password
  const login = useCallback(async (email, password) => {
    if (!supabase) {
      setError('Supabase client not available');
      return { success: false, error: 'Supabase client not available' };
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return { success: false, error: error.message };
      }

      setUser(data.user);
      return { success: true, user: data.user };
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // Signup with email and password
  const signup = useCallback(async (email, password, metadata = {}) => {
    if (!supabase) {
      setError('Supabase client not available');
      return { success: false, error: 'Supabase client not available' };
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      });

      if (error) {
        setError(error.message);
        return { success: false, error: error.message };
      }

      // Note: User might need to confirm email before being fully authenticated
      if (data.user && !data.user.email_confirmed_at) {
        return { 
          success: true, 
          user: data.user, 
          needsConfirmation: true,
          message: 'Please check your email to confirm your account'
        };
      }

      setUser(data.user);
      return { success: true, user: data.user };
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // Forgot password - send reset email
  const forgotPassword = useCallback(async (email) => {
    if (!supabase) {
      setError('Supabase client not available');
      return { success: false, error: 'Supabase client not available' };
    }

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        setError(error.message);
        return { success: false, error: error.message };
      }

      return { 
        success: true, 
        message: 'Password reset email sent. Please check your inbox.' 
      };
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // Update password (for reset password flow)
  const updatePassword = useCallback(async (newPassword) => {
    if (!supabase) {
      setError('Supabase client not available');
      return { success: false, error: 'Supabase client not available' };
    }

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        setError(error.message);
        return { success: false, error: error.message };
      }

      return { success: true, message: 'Password updated successfully' };
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // Google OAuth authentication
  const signInWithGoogle = useCallback(async () => {
    if (!supabase) {
      setError('Supabase client not available');
      return { success: false, error: 'Supabase client not available' };
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) {
        setError(error.message);
        return { success: false, error: error.message };
      }

      // OAuth redirects, so we return success immediately
      return { success: true, message: 'Redirecting to Google...' };
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // Logout
  const logout = useCallback(async () => {
    if (!supabase) {
      setError('Supabase client not available');
      return { success: false, error: 'Supabase client not available' };
    }

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        setError(error.message);
        return { success: false, error: error.message };
      }

      setUser(null);
      return { success: true, message: 'Logged out successfully' };
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Check if user is authenticated
  const isAuthenticated = !!user;

  return {
    // State
    user,
    loading,
    error,
    isAuthenticated,
    
    // Actions
    login,
    signup,
    forgotPassword,
    updatePassword,
    signInWithGoogle,
    logout,
    clearError,
  };
};

export default useAuth;
