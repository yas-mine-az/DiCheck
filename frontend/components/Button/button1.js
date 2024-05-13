const Button1 = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{ 
          fontFamily: 'Montserrat-Bold'
        }}
        className="justify-center px-10 py-4 text-sm font-bold tracking-wide leading-5 text-center text-white whitespace-nowrap bg-gray-600 rounded-md"
      >
        {children}
      </button>
    );
  };
  
  export default Button1;
  