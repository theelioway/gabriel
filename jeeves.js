function CodeBlock() {
    const code = `import 'prismjs/themes/prism.css';
  import 'prismjs/components/prism-javascript';
  
  function CodeBlock() {
    return (
      <pre>
        <code className="language-javascript">
          {`
            function greet() {
              console.log('Hello, World!');
            }
            
            greet();
          `}
        </code>
      </pre>
    );
  }`;
  
    return (
      <pre>
        <code>{code}</code>
      </pre>
    );
  }
  