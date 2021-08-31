import React, { Component } from 'react';

class DogFetch extends Component {
    constructor() {
        super()
        this.state = {
            imageUrl: '',
        }
    }

    fetchDog = () => {
        fetch(`https://dog.ceo/api/breeds/image/random`, {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            this.setState({
                imageUrl: res.message,
            })
        })
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.imageUrl} />
                </div>
                <button onClick={this.fetchDog}>Get A New Dog</button>
            </div>
        )
    }
}

export default DogFetch;