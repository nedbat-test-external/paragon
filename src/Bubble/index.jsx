import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const STYLE_VARIANTS = [
  'primary',
  'success',
  'error',
  'warning',
];

const Bubble = React.forwardRef(({
  variant,
  className,
  children,
  disabled,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={classNames(
      'pgn__bubble',
      `pgn__bubble-${variant}`,
      className,
      { disabled },
    )}
    {...props}
  >
    {children}
  </div>
));

Bubble.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** The `Bubble` style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Activates disabled variant. */
  disabled: PropTypes.bool,
  /** A class name to append to the base element. */
  className: PropTypes.string,
};

Bubble.defaultProps = {
  variant: 'primary',
  disabled: false,
  className: undefined,
};

export default Bubble;
