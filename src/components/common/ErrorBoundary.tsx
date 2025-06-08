import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  level?: 'page' | 'component' | 'critical';
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    return {
      hasError: true,
      error,
      errorId
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);

    // Store error info in state
    this.setState({ errorInfo });

    // Call custom error handler
    this.props.onError?.(error, errorInfo);

    // Report to error tracking service (e.g., Sentry)
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In production, you would send this to an error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error, { extra: errorInfo });
      console.error('Error reported:', { error, errorInfo });
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { level = 'component', showDetails = false } = this.props;
      const { error, errorId } = this.state;

      return (
        <div className={`flex items-center justify-center p-8 ${
          level === 'critical' ? 'min-h-screen bg-red-50' :
          level === 'page' ? 'min-h-[400px]' : 'min-h-[200px]'
        }`}>
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-red-200">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {level === 'critical' ? 'Critical Error' : 'Something went wrong'}
              </h2>

              <p className="text-gray-600 mb-6">
                {level === 'critical'
                  ? 'A critical error occurred that prevents the application from working properly.'
                  : 'We encountered an unexpected error. Please try again or refresh the page.'
                }
              </p>

              {showDetails && error && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg text-left">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Bug className="w-4 h-4 mr-2" />
                    Error Details
                  </h3>
                  <p className="text-sm text-gray-700 font-mono break-all">
                    {error.message}
                  </p>
                  {errorId && (
                    <p className="text-xs text-gray-500 mt-2">
                      Error ID: {errorId}
                    </p>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {level !== 'critical' && (
                  <button
                    onClick={this.handleRetry}
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </button>
                )}

                <button
                  onClick={this.handleReload}
                  className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center px-4 py-2 bg-celeste text-night rounded-lg hover:bg-celeste-dark transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
