const Button2 = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{ 
          fontFamily: 'Montserrat-Bold'
        }}
        className="justify-center px-10 py-4 text-sm font-bold tracking-wide leading-5 text-center text-gray-600 rounded-md border border-gray-600 border-solid"
      >
        {children}
      </button>
    );
  };
  
  export default Button2;
  