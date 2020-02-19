import React, { Component } from 'react';


class Movies extends React.Component {

    state = {
        movies: []
    };

    componentDidMount() {
        fetch('https://movieapitest.herokuapp.com/api/movies')
        .then(res => res.json()).then((data) => {
            this.setState({movies: data})
        }).catch(console.log);
    }


    render () {

        const { movies } = this.state;

        return (

            <React.Fragment>

                <table border="1">
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Rental Price</th>
                        <th>Sales Price</th>
                        <th>Available</th>
                        <th colSpan="2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { movies.map(movie => (
                        <tr>
                            <td>{ movie.title }</td>
                            <td>{ movie.description }</td>
                            <td>{ movie.stock }</td>
                            <td>{ movie.rentalPrice }</td>
                            <td>{ movie.salesPrice }</td>
                            <td>{ movie.availability }</td>
                            <td><button onClick={ () => this.updateData(movie) }>Editar</button></td>
                            <td><button onClick={ () => this.removeData(movie) }>Quitar</button></td>
                        </tr>
                        )) }
                    </tbody>
                </table>               


            </React.Fragment>

        )
    }

}

export default Movies