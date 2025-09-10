import { Hello, Hello1, Hello2 } from "./App1";
import Card from "./Card";
import State from "./Class 2/State";
import State1 from "./Class 3/State1";
import Form from "./Class 4/Form";
import Wrapper from "./Class 4/Wrapper";
import Form1 from "./Class 5/Form1";
import Routing from "./Class 6/Routing";
import Courses from "./Class 6/Courses";
import Contactus from "./Class 6/Contactus";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UIUX from "./Class 6/UIUX";
import Frontend from "./Class 6/frontend";
import Backend from "./Class 6/backend";
import Dashboard from "./Class 6/Dashboard";
import NotFound from "./Class 7/NotFound";
import Navbar from "./Class 7/Navbar";
import Student from "./Class 7/Student";
import Hooks from "./Class 8/Hooks";
import DashBoard from "./Class 8/DashBoard";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from "./Class 8/MainComponent";
import { createContext } from "react";


 export const DataContext=createContext()




function App() {
const style={
  backgroundColor:"red"
}

let router=createBrowserRouter(
  [
    {
      path:'/',
      element:  <> <Navbar />  <Routing /> </>
    },
    {
      path:'/Courses',
      element:<> <Navbar />  <Courses /> </>,
      children:[
        {
          path:'UIUX',
          element:<UIUX />
        },
      {
        path:'frontend',
        element:<Frontend />
      },
    {
      path:'backend',
      element:<Backend />
    }      ]
    },
{
  path:'Dashboard',
  element:<> <Navbar />  <Dashboard /> </>
},

    {
      path:'/Contactus',
      element:<> <Navbar />  <Contactus /> </>
    },

    {
      path:'*',
      element:<NotFound />
    },
    {
      path:'/student/:id',
      element:<> <Navbar />  <Student /> </>
    }

  ]
)




  let age = 25; //variable to store age
  let option=[
    "Hitech",
    "Durable",
    "Money Saving"]
  let option2={
    a:"Super",
    b:"Fantastic",
    c:"Excellent"
  }
  return ( 
    <>
      {/* <Hello />
      <Hello1 />
      < Hello2 />


      {/* {}: for writing js in html  */}
      {/* <h1>My name is Manoj and my age is {age}</h1> */}

{/* <Card name="Iphone" price={50000} variant="15" rating={4.5} features={option[0]} features2={option2.a} />
<Card name="Samsung" price={40000} variant="A12" rating={4.0} features={option[1]} features2={option2.b} />
<Card name="Oneplus" price={30000+10000} variant="NORD" rating={4.2} features={option[2]} features2={option2.c} />
<Card name="Redmi" price={20000} variant="NOTE 12" rating={4.1} features={option[0]} />
<Card name="Vivo" price={25000} variant="Y22" rating={4.3} features={option[1]} />
<Card name="Realme" price={22000} variant="Narzo 60" rating={4.4} features={option[2]} /> */}
{/* <Card  />
<Card />
<Card />
<Card /> */}

{/* <State /> */}

{/* <State1 /> */}

{/* <Wrapper /> */}

{/* <Form /> */}

{/* <Form1 /> */}

{/* <RouterProvider router={router}/> */}

{/* <Navbar /> */}

{/* <Hooks /> */}
{/* <DashBoard /> */}

<DataContext.Provider value="Bhallas">
<MainComponent />
</DataContext.Provider>


    </>
  )
}
export default App;