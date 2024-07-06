import React, { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Richa")
   useEffect( () => {
    setTimeout(()=>{
      setCount(count => count+1);
    }, 2000)
   }, [count])

  return (
    <>
      <h1>UseEffect {count}</h1>
    </>
  )
}

export default App







// Method-1(No dependency) :- c0unt start frpm 0 and it will continuously increased by 1 after 2 sec. because we are using useEffect without any dependencies so when we use the useeffect function without any dependencies so when we use

// const [count, setCount] = useState(0)

//    useEffect( () => {
//     setTimeout(()=>{
//       setCount(count => count+1);
//     }, 2000)
//    })




// method-2(add one dependeencies):- if we add one depemdencies so we will add the empty array so here we have the use effect we  have added one function call back function and one empty array:- ,[])
// whenever we are using the empty array then it willl execute this callback function only once when the component gets loaded

// const [count, setCount] = useState(0)

//    useEffect( () => {
//     setTimeout(()=>{
//       setCount(count => count+1);
//     }, 2000)
  //  }, []}
  // OutPut:- it will increase the counter value by 1 and that's it. it is not continuously increasing it. it increase the counter value by 1 only one time



  // Method-3(We can use multiple  variable in this array )
 // useEffect( () => {
  //   setTimeout(()=>{
  //     setCount(count => count+1);
  //   }, 2000)
  //  }, [count])