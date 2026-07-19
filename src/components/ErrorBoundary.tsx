import { Component, ReactNode } from 'react';

/**
 * Catches render errors in the subtree and shows a fallback instead of a
 * blank screen. Class component because hooks cannot catch render errors.
 */

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  handleReset = () => {
    this.setState({ hasError: false, message: '' });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="empty-state">
          <span className="empty-icon">💥</span>
          <h3 className="empty-title">Something went wrong</h3>
          <p className="empty-message">{this.state.message}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleReset}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
