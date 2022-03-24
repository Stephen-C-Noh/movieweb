import styles from "../css/Header.module.css";
import Search from "../routes/Search";
import { ReactComponent as Logo } from "../img/logo.svg";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [value, setValue] = useState(""),
        onInput = ({ target: { value } }) => setValue(value),
        onFormSubmit = (e) => {
            console.log(value);
            <Search keyword={value} />;
        };

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href={"/"}>
                    <Logo width="149px" height="42px" className="d-inline-block align-top" alt="" />
                </Navbar.Brand>
                <span className={styles.by}>by</span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Stephen-C-Noh" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.linkedin.com/in/changbeomstephennoh-6a1b71174/">
                                LinkedIn
                            </NavDropdown.Item>
                            <NavDropdown.Item href="mailto:reach.out.to.stephen@gmail.com">
                                Email
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://github.com/Stephen-C-Noh">
                                Other Projects on Github
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href={`/`}>Home</Nav.Link>
                        <Nav.Link href="#link">Search</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={onFormSubmit}>
                        <FormControl
                            type="Search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={onInput}
                            value={value}
                        />
                        <Link to={`/search/${value}`}>
                            <Button
                                className={styles.submitBtn}
                                variant="outline-success"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
