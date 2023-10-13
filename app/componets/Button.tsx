

const Button = ({ classStyles, btnName, handleClick }) => {
  return (
    <button
      className={`nft-gradient text-sm minLg:text-large py-2 px-6 minLg:px-8 font-poppins font-semibold text-white ${classStyles}`}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button