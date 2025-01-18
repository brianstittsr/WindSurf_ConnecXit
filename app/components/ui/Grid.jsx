const Grid = ({ children, className = '', cols = 1 }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-4 md:gap-6 lg:gap-8 ${gridCols[cols]} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
