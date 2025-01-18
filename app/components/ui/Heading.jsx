'use client';

const Heading = ({ 
  children, 
  as: Component = 'h2',
  size = 'lg',
  className = '',
  ...props 
}) => {
  const sizes = {
    sm: 'text-lg font-semibold',
    lg: 'text-2xl font-bold',
    xl: 'text-3xl font-bold',
    '2xl': 'text-4xl font-bold',
    '3xl': 'text-5xl font-bold',
    '4xl': 'text-6xl font-bold',
  };

  return (
    <Component
      className={`${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
