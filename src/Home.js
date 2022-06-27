const Home = () => {

    const handleClick = (e)  => {
        console.log("Hello, ninjas", e);
    }

    const handleClickAgain = (name) => {
        console.log("Hello", name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain("mario")}>Click me again</button>
        </div>
    );
}
 
export default Home;