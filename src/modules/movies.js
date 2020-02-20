import React from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import config from '../config';


class Movies extends React.Component {

    state = {
        movies: []
    };

    componentDidMount() {
        var p = [];
        this.getMovies(p);
    }

    getMovies = (params) => {

        var urlAPI = config.urlAPI + '/api/movies';

        if (params.length > 0)
        {
            urlAPI += '?';
            params.forEach((par) => {
                urlAPI += par.name + '=' + par.value + '&';
            });
        }

        fetch(urlAPI)
        .then(res => res.json()).then((data) => {
            this.setState({movies: data})
        }).catch(console.log);
    }


    getQueryParam = () => {

        var params = [
            { name: "q", value: this.refs.query.value },
            { name: "sort", value: this.refs.sort.value },
            { name: "p", value: this.refs.page.value },
            { name: "psize", value: this.refs.pagesize.value }
        ]

        this.getMovies(params);
    }

    render () {

        const { movies } = this.state;

        return (

            <React.Fragment>

                <Container>
                    <br/>
                    <Row>
                        <Col><h1>Movies</h1></Col>
                    </Row>
                    <br/>
                    <Form>
                    <Row >
                        <Col md={4}>
                            <label>Search movie:</label>
                            <Form.Control ref="query" placeholder="Search for movie" onChange={ () => this.getQueryParam() } />
                        </Col>
                        <Col md={4}>
                            <label>Sort by:</label>
                            <select ref="sort" className="form-control" onChange={ () => this.getQueryParam() }>
                                <option value="">Title</option>
                                <option value="title_desc">Title Desc</option>
                                <option value="popularity">Popularity</option>
                                <option value="popularity_desc">Popularity Desc</option>
                            </select>
                        </Col>
                        <Col md={2}>
                            <label>Page:</label>
                            <Form.Control ref="page" onChange={ () => this.getQueryParam() } />
                        </Col>
                        <Col md={2}>
                            <label>Page Size:</label>
                            <Form.Control ref="pagesize" onChange={ () => this.getQueryParam() } />
                        </Col>
                    </Row>
                    </Form>
                    <br/>
                    <Row>
                        {
                            movies.map(movie => (
                                <Col md={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img height={300} variant="top" src={ movie.imageUrl } />
                                        <Card.Body>
                                            <Card.Title>{ movie.title }</Card.Title>
                                            <Card.Text>{ movie.description }</Card.Text>
                                            <Card.Text>Likes: <b>{ movie.likes }</b></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                        
                    </Row>
                    <br/>
                    <br/>
                </Container>

            </React.Fragment>

        )
    }

}

export default Movies