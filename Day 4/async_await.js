const apicall = async()=>{
    try {
        const val = await fetch('https://jsonplaceholder.typicode.com/tods');
        const jval = await val.json();
        console.log(jval);
    } catch {
        console.log("error");
    }
}
apicall();