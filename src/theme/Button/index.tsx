import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@amsterdam/design-system-react';

const ShareButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/docs/intro');
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      Share your input
    </Button>
  );
};

export default ShareButton;
