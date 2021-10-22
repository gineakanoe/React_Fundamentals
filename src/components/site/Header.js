import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>React Library</NavbarBrand>
                <NavItem>
                    <NavLink href='http://github.com/yourhandle/yourRepoForThisApp'>
                        github
                    </NavLink>
                </NavItem>
            </Navbar>
        </header>
    );
};

export default Header;