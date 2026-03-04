/*
Task: To crreate a tag that looks like
<UserProfile name = "x" role ="y" dispay_pic = "abc.com/1.jpg"</UserProfile>

Custom tag - component
values - props

HTML STYLE style = "display:flex"
JSX style = {{}}
*/

export function UserProfile({name, role, display_pic}){//inside brackets you pass the props
    return(
        <article style = {{border: "1px solid gray", padding: "10px", borderRadius: "5%"}}>
            <img src={display_pic}></img>
            <h3>{name}</h3>
            <h1>{role}</h1>
        </article>
    );
}