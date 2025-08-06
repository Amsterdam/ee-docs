import React, { forwardRef } from 'react';
import { DocSearchButtonProps } from '@docsearch/react';
import { Icon } from '@amsterdam/design-system-react';
import { SearchIcon } from '@amsterdam/design-system-react-icons';
import styles from './styles.module.css';

const SearchButton = forwardRef<HTMLButtonElement, DocSearchButtonProps>(
  ({ onTouchStart, onFocus, onMouseOver, onClick }, ref) => (
    <button
      type="button"
      className={styles.button}
      onTouchStart={onTouchStart}
      onFocus={onFocus}
      onMouseOver={onMouseOver}
      onClick={onClick}
      ref={ref}
    >
      <span className={styles.text}>Zoeken</span>
      <Icon svg={SearchIcon} size="heading-6" />
    </button>
  ),
);

SearchButton.displayName = 'SearchButton';

export default SearchButton;
