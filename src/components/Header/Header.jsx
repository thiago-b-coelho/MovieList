const Header = (props) => {
    function handleSubmit(e) {
        e.preventDefault();

        const {
            0: { value },
        } = e.target;

        props.onSubmit(value)
        
        e.target[0].value = "";

        console.log(value);
    }

    return (
        <header className="Header">
            <h1>Movie List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pesquise por filmes" />
            </form>
        </header>
    );
};

export default Header;
