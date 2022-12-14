import React from 'react';
// import FooterComp from '../FooterComp/index';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {error: null, errorInfo: null};
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
          })
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Oaps!! No data found</h1>;
      }
  
      return this.props.children; 
    }
  }
  export default ErrorBoundary;