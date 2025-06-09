import css from './UserMenu.module.css'


export default function UserMenu() {
    const handleLogOut = () => {
        console.log("Logout is clicked")
    }
    return (
        <div className={css.container}>
            <p className={css.username}>Welcome, 
                {/* {user.name} */}
            </p>
            <button type="button" onClick={handleLogOut}>Logout</button>
        </div>
    )
}