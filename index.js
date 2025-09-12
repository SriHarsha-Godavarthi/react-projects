const parent=React.createElement('div',{},[
    React.createElement('h1',{style: {color:'red'}},'Welcome To JavaScript!'),
    React.createElement('div',{},React.createElement('h2',{color: 'black'},"this is sibiling element")),

])
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)