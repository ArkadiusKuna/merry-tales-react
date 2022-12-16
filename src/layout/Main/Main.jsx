const variantMap = {
  def: 'pt-header border-2 border-black min-h-screen xl:max-w-screen',
  grid: 'grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 xl:max-h-screen xl:grid-cols-8 xl:grid-rows-5',
  flex: 'flex flex-col items-center bg-ghostWhite',
};

const Main = ({ children, variant = 'def' }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return <main className={`${def} ${variantClasses}`}>{children}</main>;
};

export default Main;
