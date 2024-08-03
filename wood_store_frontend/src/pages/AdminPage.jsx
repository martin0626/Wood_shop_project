import Login from "../components/Admin/LoginAdmin";

export default function Admin(){
    return (
        <>
            <Login/>
        </>
    )
}


export const action = async({request})=>{
    const searchParams = new URL(request.url).searchParams;

    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
    debugger
    console.log(username, password);

    // const response = await fetch('http://localhost:8080/' + mode, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(authData),
    //  });

    // const resData = await response.json();
    // const token = resData.token;

    return data;
} 