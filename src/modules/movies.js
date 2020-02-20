import React from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import config from '../config';


class Movies extends React.Component {

    state = {
        movies: []
    };

    componentDidMount() {
        fetch(config.urlAPI + '/api/movies')
        .then(res => res.json()).then((data) => {
            this.setState({movies: data})
        }).catch(console.log);
    }

    query = () => {
        var q = this.refs.query.value;
        fetch(config.urlAPI + '/api/movies?q=' + q)
        .then(res => res.json()).then((data) => {
            this.setState({movies: data})
        }).catch(console.log);
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
                    <Row >
                        <Col md={4}>
                            <Form.Control ref="query" placeholder="Search for movie" onChange={ () => this.query() } />
                        </Col>
                        <Col md={3}></Col>
                    </Row>
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