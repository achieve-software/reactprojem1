import Msg from "./Msg"

const Person = ({name, tel, img }) => {
    // console.log(props)

    //DESTR.
    // const{name, tel, img }=props
  return (
     <div>
    {/* <h2>Hi, My Name is {name} </h2> */}
    <Msg isim={name} />
    <img src= {img}  alt="" />
    <p> {tel} </p>
    </div>
    )
   
}
 
  
export default Person