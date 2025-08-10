'use client'
import React, { useEffect } from 'react';

// Type definitions for the Figo Chat Widget
interface WidgetButtonConfig {
  backgroundColor: string;
  textColor: string;
  buttonText: string;
  zIndex: number;
}

interface FigoChatWidgetConfig {
  xClient: string;
  assistantId: string;
  widgetButton: WidgetButtonConfig;
}

interface FigoChatWidget {
  init: (config: FigoChatWidgetConfig) => void;
}

// Extend the Window interface to include FigoChatWidget
declare global {
  interface Window {
    FigoChatWidget?: FigoChatWidget;
  }
}

const FigoAIChatWidget: React.FC = () => {
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // Initialize FigoChatWidget object to prevent property access errors
    window.FigoChatWidget = window.FigoChatWidget || {
      init: (config: FigoChatWidgetConfig) => {
        console.warn('FigoChatWidget not yet loaded, configuration saved:', config);
      }
    };

    // Load the script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/figolabs/figoaichatwidget@main/figo-ai-chat-widget.min.js';
    script.async = true;
    
    script.onload = (): void => {
      try {
        // Initialize the widget after script loads
        if (window.FigoChatWidget && typeof window.FigoChatWidget.init === 'function') {
          window.FigoChatWidget.init({
            xClient: "Zmlnb2V2ZW50cy1haS1hc3Npc3RhbnQxMzM4NjkzODYxMDQzMjMwOTE=",
            assistantId: "bd050307-c636-4f6f-9fbc-b4ac40df4544",
            widgetButton: {
              backgroundColor: "#553286",
              textColor: "white",
              buttonText: "Ask AI",
              zIndex: 1000
            }
          });
          console.log('Figo AI Chat Widget initialized successfully');
        } else {
          console.error('FigoChatWidget.init is not available after script load');
        }
      } catch (error) {
        console.error('Error initializing Figo Chat Widget:', error);
      }
    };
    
    script.onerror = (error): void => {
      console.error('Failed to load Figo Chat Widget script:', error);
    };
    
    // Add script to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return (): void => {
      try {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
        
        // Clean up the global widget object
        if (window.FigoChatWidget) {
          delete window.FigoChatWidget;
        }
      } catch (error) {
        console.warn('Error during widget cleanup:', error);
      }
    };
  }, []);

  // This component doesn't render anything visible itself
  // The widget will be injected by the external script
  return null;
};

export default FigoAIChatWidget;