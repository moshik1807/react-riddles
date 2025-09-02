export default function Create(){
    return(
        <>
        <h1>Create</h1>
        <form action="">
            <input type="text" name="level" placeholder="enter level"/>
            <input type="text" name="name" placeholder="enter name"/>
            <input type="text" name="taskDescription" placeholder="enter taskDescription"/>
            <input type="text" name="correctAnswer" placeholder="enter correctAnswer"/>
            <input type="text" name="timer" placeholder="enter timer"/>
            <input type="text" name="hint" placeholder="enter hint"/>
            <button type="submit" onClick={(e)=>{e.preventDefault()}}>submit</button>
        </form>
        </>
    )
}