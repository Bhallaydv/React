import { useState } from "react";

async function Form1() {
    // function simple(){}
    await new Promise((resolve) => { setTimeout(resolve, 2000) });

    const [formData, setformData] = useState({
        'username': '',
        'email': ''
    });
        const [status, setStatus] = useState(false);

    // console.log(formData);
    function handleChange(e) {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value
        }
        ));
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }



    return (
        <>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName:</label>
                    <input type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label>Email:</label>
                    <input type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <br />

                <button type="submit" onClick={() => setStatus(!status)} disabled={status} >{status ? "Processing..." : "Submit"}</button>

            </form>
        </>
    );
}


export default Form1;