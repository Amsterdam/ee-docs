import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/NavbarItem/NavbarNavLink';

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}: Props): JSX.Element {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const isExternalLink = label && href && !isInternalUrl(href);

  // Link content is set through html XOR label
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <>
            {label}
            {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
            {isExternalLink && (
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              <IconExternalLink {...(isDropdownLink && { width: 12, height: 12 })} />
            )}
          </>
        ),
      };

  if (href != null) {
    return (
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      <Link href={prependBaseUrlToHref ? normalizedHref : href} {...props} {...linkContentProps} />
    );
  }

  return (
    <Link
      className="amsterdam-page-menu__link"
      to={toUrl}
      isNavLink
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl),
      })}
      {...props}
      {...linkContentProps}
    />
  );
}
