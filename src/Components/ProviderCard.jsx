import React from 'react';


export default class ProviderCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.provider) {
            let provider = this.props.provider;
            let display_address = provider.location.display_address;
            let address = display_address[0] + ", " + display_address[1] + ", " + display_address[2];

            return (
                <div className="card" style={styles.card}>
                    <img class="card-img-top" style={styles.image} src={provider.image_url} />
                    <div class="card-body" style={styles.body}>
                        <h5 class="card-title">{provider.name}</h5>
                        <p class="card-text"><strong>Rating:</strong> {provider.rating} &#9733;</p>
                        <p class="card-text"><strong>Address:</strong> {address}</p>
                        <p class="card-text"><strong>Phone:</strong> {provider.display_phone}</p>
                        <a href={provider.url} class="btn btn-primary">Review</a>
                        
                    </div>
                </div>
            )
        }

        return null;
    }
}

const styles = {
    card: {
        width: "18rem",
        marginTop: "10px"
    },
    image: {
        width: "18rem",
        height: "400px"
    },
    body: {
        width: "18rem",
        height: "400px",
    }
}