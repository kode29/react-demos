// ReactDOM.render(<h1>Hello, World! This is REACT!</h1>, document.getElementById("root"))
// ReactDOM.render(HTML CODE, whereToPutIt)

/////////////////////////////////////////////////////////////////////////

// ReactDOM.render(<p>Hi, my name is KP</p>, document.getElementById("root"))

/////////////////////////////////////////////////////////////////////////

// ReactDOM.render(
//     <ul><li>Item 1</li><li>Item 2</li></ul>, 
//     document.getElementById("root")
// )

/////////////////////////////////////////////////////////////////////////

// function MainContent(){
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         {/* <Navbar /> */}
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

/////////////////////////////////////////////////////////////////////////

// Imperative = "Give me every step and I will do it"
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

/////////////////////////////////////////////////////////////////////////

// Declarative = "Tell me what to do and I'll take care of it"
// ReactDOM.render(
//     <h1 className="header">I'm a declarative way to program</h1>,
//     document.getElementById("root")
// )

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// ReactDOM.render(element, document.getElementById("root"))

/////////////////////////////////////////////////////////////////////////

// This DOES NOT WORK
// ReactDOM.render(
//     <h1>This is a header</h1><p>This is a paragraph</p>,
//     whereToGo
// )
// as elements need to be in a single parent element
// ReactDOM.render(
//     <div>
//         <h1>This is a header</h1>
//         <p>This is a paragraph</p>
//     </div>,
//     whereToGo
// )

// OR
// Notice the () to include multiple lines
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )
// console.log(page)
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

/////////////////////////////////////////////////////////////////////////

// Challenge: Nav with children
const nav = (
    <nav>
        <h1>Website Brand</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById("root"))