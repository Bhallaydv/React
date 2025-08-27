
import {useForm} from "react-hook-form";
// let all=[];
import "./Form.css"
function Form(){
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function dataHandle(data){
await new Promise((resolve)=>{setTimeout(resolve,2000)})


    console.log(data);
    // all.push(data);  
    // console.log(all);

  }

    return(

<>

<h1>Form Handling</h1>
<form onSubmit={handleSubmit(dataHandle)}>
<div>
    <label>Name:</label>
    <input {...register("name", { required: true, minLength:{value:2, message:"Minimum 2 characters required"} , maxLength:{value:10, message:"Maximum 10 characters allowed"} })} />
    {errors.name && <p className="input"> {errors.name.message} </p>}
</div>
<br />
<div>
    <label>City:</label>
    <input {...register("city", { required: true, minLength:{value:2, message:"Minimum 2 characters required"}, maxLength:{value:15, message:"Maximum 15 characters allowed"} })} />

{errors.city && <p className="input"> {errors.city.message} </p>}
</div>
<br />
<div>
    <label>Course:</label>
    <input {...register("course", { required: true, minLength:{value:2, message:"Minimum 2 characters required"}, maxLength:{value:10, message:"Maximum 10 characters allowed"} })} />

{errors.course && <p className="input"> {errors.course.message} </p>}
</div>
<br />
<div>
    <label>Ducat ID:</label>
    <input {...register("ducatId", { required: true, minLength:{value:2, message:"Minimum 2 characters required"}, maxLength:{value:10, message:"Maximum 10 characters allowed"} })} />

{errors.ducatId && <p className="input"> {errors.ducatId.message} </p>}
</div>
<br />
<div>
    <label>Phone number:</label>
    <input {...register("phone", { required: true, minLength:{value:2, message:"Minimum 2 characters required"}, maxLength:{value:15, message:"Maximum 15 characters allowed"} })} />

{errors.phone && <p className="input"> {errors.phone.message} </p>}
</div>
<br />

<input type="submit" disabled={isSubmitting} value={isSubmitting ? "Processing":"Submit"} />

</form>
</>

    )
}

export default Form;