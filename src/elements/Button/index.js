import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push('btn-primary');
  if (props.isLight) className.push('btn-dark');
  if (props.isLarge) className.push('btn-lg');
  if (props.isSmall) className.push('btn-sm');
  if (props.isBlock) className.push('d-md-block');
  if (props.isTransparent) className.push('btn-outline-primary');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };
  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel='noopener noreferrer'
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}
      ref={props.ref}
    >
      {props.children}
    </button>
  );
}
Button.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLight: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  isTransparent: propTypes.bool,
  ref: propTypes.func,
};
