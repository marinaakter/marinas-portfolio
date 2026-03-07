import { Link, NavLink } from 'react-router-dom'
import Container from '../ui/Container'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
]

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-sky-600">
                    LOGO
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? 'text-sky-600' : 'text-slate-700 hover:text-sky-600'
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </Container>
        </header>
    )
}