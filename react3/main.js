// PascalCase <-- Recommended
// camelCase
// snake_case

function Page(){
    return (
    <div>
        <header>
            <nav>
                <img src="./logo512.png" width="40"/>
            </nav>
        </header>
        <main>
            <h1>Why React is Fun</h1>
            <ol>
                <li>It's a popular library, so I can fit in with the cool kids</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
                <li>Reason #3</li>
                <li>Reason #4</li>
            </ol>
        </main>
        <footer>
            <small>&copy; 2024 - <a href="https://educodewithkp.com">EduCode with KP</a> | All rights reserved</small>
        </footer>
    </div>
    )
}

// call by function - technically not correct, but works
// ReactDOM.render(Page(), document.getElementById("root"))

/// correct "component" calling
ReactDOM.render(<Page />, document.getElementById("root"))