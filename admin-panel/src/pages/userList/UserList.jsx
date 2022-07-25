import "./userList.css";

export default function UserList() {
    return (
        <div className="userList">
            {false ? <span>token</span> : <span>no response yet</span>}
        </div>
    );
}
