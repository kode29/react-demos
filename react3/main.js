// PascalCase <-- Recommended
// camelCase
// snake_case

function TemporaryName(){
    return (
    <div>
        <img src="./logo512.png" alt="React Logo" width="40"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first releasted in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has over 100k stars on <a href="https://github.com/facebook/react">Github</a></li>
            <li>Is maintained by <a href="https://facebook.com">Facebook</a></li>
            <li>Powers thousands of enterprise apps, including Mobile apps</li>
        </ul>
    </div>
    )
}


ReactDOM.render(TemporaryName(), document.getElementById("root"))