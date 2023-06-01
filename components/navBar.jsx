import Link from "next/link";
function NavBar() {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/new">New Task</Link></li>
        </ul>
    )
}
export default NavBar;