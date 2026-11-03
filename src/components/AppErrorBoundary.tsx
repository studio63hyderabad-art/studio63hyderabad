import { Component, type ErrorInfo, type ReactNode } from "react";

export default class AppErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unable to render Studio63", error, info.componentStack);
  }

  render() {
    if (this.state.failed) {
      return (
        <div role="alert" className="min-h-screen grid place-items-center p-6 bg-[#110F0D] text-[#FAF7F1]">
          <div className="text-center max-w-md">
            <h1 className="text-2xl mb-4">Unable to load this page</h1>
            <p className="mb-6">Check your connection and try loading the latest version.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="border border-current px-6 py-3 cursor-pointer"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
