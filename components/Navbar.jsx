import Link from 'next/link'


const Navbar = () => (

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
            <Link className="nav-link" href="/">
                Portfolio
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/education">
                            Education
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/github">
                            Github
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar