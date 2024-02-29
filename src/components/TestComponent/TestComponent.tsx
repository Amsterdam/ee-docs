import PlaceholderImage from '@site/static/img/undraw_docusaurus_mountain.svg'

function TestComponent({ children = undefined, foo = 'bar' }): JSX.Element {
  return (
    <div style={{ border: '2px solid #ddd', padding: '10px' }}>
      <PlaceholderImage style={{ maxWidth: '200px', height: '200px' }} />
      <h1>{foo}</h1>
      <p>Lorem ipsum blah blah blah</p>
      {children && <div>{children}</div>}
    </div>
  );
}

export default TestComponent;
