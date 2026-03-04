import {UserProfile} from './UserProfile.jsx';

//every component must return one HTML object
//which can have several nested objects
export function ClassList(){//nest another component inside another component
    return(//outerlevel: exactly one tag
        <div style ={{display: "flex"}}>
             <UserProfile name="Christine" role="Student" display_pic="https://randomuser.me/api/portraits/women/3.jpg"></UserProfile>
             <UserProfile name="Cole" role="Lumber" display_pic="https://randomuser.me/api/portraits/men/10.jpg"></UserProfile>
             <UserProfile name="Ava" role="Designer" display_pic="https://randomuser.me/api/portraits/women/21.jpg"></UserProfile>
            <UserProfile name="Marcus" role="Engineer" display_pic="https://randomuser.me/api/portraits/men/32.jpg"></UserProfile>
            <UserProfile name="Priya" role="Teacher" display_pic="https://randomuser.me/api/portraits/women/45.jpg"></UserProfile>
            <UserProfile name="Jamal" role="Chef" display_pic="https://randomuser.me/api/portraits/men/58.jpg"></UserProfile>
            <UserProfile name="Elena" role="Photographer" display_pic="https://randomuser.me/api/portraits/women/67.jpg"></UserProfile>
        </div>
    );
}