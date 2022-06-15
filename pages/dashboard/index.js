import Link from 'next/link'

const Dashboard = () => {
    return (
        <div>
            <h3>List Of Company</h3>
            <ul>
                <li>
                    <Link href="/company/geulante">
                        <a>PT. Geulante</a>
                    </Link>
                </li>
                <li>
                    <Link href="/company/cerape">
                        <a>PT. Cerape</a>
                    </Link>
                </li>
                <li>
                    <Link href="/company/leumang">
                        <a>PT. Leumang</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Dashboard;