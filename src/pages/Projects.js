const Projects = () => {
    return (
        <div className="container my-4">
            <div className="mx-auto" style={{ maxWidth: '50rem' }}>
                <h2>Chainsaw Man API</h2>
                <p>A RESTful API that grants access to comprehensive information about Chainsaw Man. While initial access through GET requests is open without credentials, there are limitations on request frequency for anonymous users. To unlock extended usage capabilities, users are encouraged to register, enabling the use of JWT for higher request limits.</p>
                <a href="https://chainsawmanapi.pythonanywhere.com/">Go to Chainsaw Man API</a>
            </div>
        </div>
    );
}

export default Projects;