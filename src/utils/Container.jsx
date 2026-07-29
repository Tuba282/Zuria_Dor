const Container = ({children}) => {
    return (
        <div className="w-full min-w-[300px] max-w-[100%] mx-auto">
        {/* <div className="w-full min-w-[300px] max-w-[1550px] mx-auto"> */}
            
            {children}
        </div>
    );
};

export default Container;