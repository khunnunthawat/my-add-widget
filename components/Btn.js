import classnames from 'classnames';

const Btn = ({ color = 'default', disabled, onClick = () => {}, btnName, children }) => {
  const buttonClass = classnames(`text-white`, 'focus:outline-none rounded-md', {
    'font-normal text-blue-400': color === 'none',
    'px-4 py-1 bg-gray-500 hover:bg-gray-600': color === 'default' && !disabled,
    'px-4 py-1 bg-blue-500 hover:bg-blue-600': color === 'primary' && !disabled,
    'px-4 py-1 bg-red-500 hover:bg-red-600': color === 'danger' && !disabled,
    'px-4 py-1 bg-gray-300': disabled,
  });

  const handleClick = function () {
    onClick();
  };

  return (
    <button className={buttonClass} disabled={disabled} onClick={handleClick}>
      {children}
      {btnName}
    </button>
  );
};

export default Btn;