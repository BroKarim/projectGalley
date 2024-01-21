import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import "./prismjs-github-theme.css" // Import the desired Prism theme

interface CodeHighlightProps {
  prefixCls?: string;
  className?: string;
  language?: string;
  source?: string;
  children?: React.ReactNode;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({
  prefixCls = 'code-highlight-wrapper',
  className,
  language,
  source,
  children,
  ...others
}) => {
  const codeRef = useRef<HTMLElement>(null);

  async function highlight() {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }

  useEffect(() => {
    highlight();
  }, [language, source]);

  const langCls = language ? `language-${language}` : '';

  return (
    <pre
      className={`${prefixCls} ${className || ''} ${langCls}`}
      {...others}
      style={{
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        paddingLeft: '15px',
      }}
    >
      <code className={langCls} ref={codeRef}>
        {source || children}
      </code>
    </pre>
  );
};

export default CodeHighlight;
