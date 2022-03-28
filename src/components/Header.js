import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import styles from "../css/Header.module.css";
import Search from "../routes/Search";
import { ReactComponent as Logo } from "../img/logo.svg";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    const genres = [
        { label: "Action", value: "Action" },
        { label: "Adventure", value: "Adventure" },
        { label: "Animation", value: "Animation" },
        { label: "Biography", value: "Biography" },
        { label: "Comedy", value: "Comedy" },
        { label: "Crime", value: "Crime" },
        { label: "Documentary", value: "Documentary" },
        { label: "Drama", value: "Drama" },
        { label: "Family", value: "Family" },
        { label: "Fantasy", value: "Fantasy" },
        { label: "Film Noir", value: "Film Noir" },
        { label: "History", value: "History" },
        { label: "Horror", value: "Horror" },
        { label: "Music", value: "Music" },
        { label: "Musical", value: "Musical" },
        { label: "Mystery", value: "Mystery" },
        { label: "Romance", value: "Romance" },
        { label: "Sci-Fi", value: "Sci-Fi" },
        { label: "Short Film", value: "Short Film" },
        { label: "Sport", value: "Sport" },
        { label: "Superhero", value: "Superhero" },
        { label: "Thriller", value: "Thriller" },
        { label: "War", value: "War" },
        { label: "Western", value: "Western" },
    ];

    const [selected, setSelected] = useState([]);
    const [value, setValue] = useState(""),
        onInput = ({ target: { value } }) => setValue(value),
        onFormSubmit = (e) => {
            <Search keyword={value} />;
        };
    function GenreClick(query) {
        return;
    }
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href={"/movieweb"}>
                    <Logo
                        width="149px"
                        height="42px"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title="Stephen-C-Noh"
                            id="basic-nav-dropdown"
                        >
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
                        <Nav.Link href={"/movieweb"}>Home</Nav.Link>
                        {/* <Nav.Link href="#link">Browse by Genres</Nav.Link> */}
                        <span>
                            <MultiSelect
                                className={styles.multiSelect}
                                options={genres}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Genres"
                            />
                            <Button
                                variant="outline-primary"
                                size="sm"
                                value={selected}
                                onClick={GenreClick}
                            >
                                Browse by Genres
                            </Button>
                        </span>
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
                                Search
                            </Button>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
