// function Name(){
//     return (
//         <div> <-- wrapperContainer
//             Content
//         </div>
//     )
// }

function Header(){
    return (
       <header>
            <nav className="nav">
                <img src="./logo512.png" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
function MainContent(){
    return (
        <main>
            <h1>Why React is Fun</h1>
            <ol>
                <li>It's a popular library, so I can fit in with the cool kids</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
                <li>Reason #3</li>
                <li>Reason #4</li>
            </ol>
        </main>
    )
}

function Footer(){
    return (
        <footer>
            <small>&copy; 2024 - <a href="https://educodewithkp.com">EduCode with KP</a> | All rights reserved</small>
        </footer>
    )
}

function Page(){
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))