const Container = ({children}) => {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            {children}
        </div>
    );
};

export default Container;