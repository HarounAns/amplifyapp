import React from 'react';
import ProvidersList from './ProvidersList';

export default class ProviderSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: '',
            city: '',
            showSearch: true,
            showCards: false,
            providers: {},
        }
    }

    render() {
        if (this.state.showSearch) {
            return (
                this.createProviderForm()
            )
        }

        else if (this.state.showCards) {
            return <ProvidersList providers={this.state.providers}/>
        }
    }

    createProviderForm = () => {
        return (
            <div className="row">
                <div className="col-sm-3" />
                <div style={styles.providerForm} className="col-sm-6">
                    <form onSubmit={(e) => this.searchDoctor(e)}>
                        <div class="form-group">
                            <input type="text" name="doctor" class="form-control" placeholder="Search doctors" onChange={this.handleInputChange} />
                        </div>
                        <div class="form-group">
                            <input type="text" name="city" class="form-control" placeholder="City" onChange={this.handleInputChange} />
                        </div>

                        <button type="submit" class="btn btn-primary">Search</button>
                    </form>
                </div>
                <div className="col-sm-3" />
            </div>


        )
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    searchDoctor = (event) => {
        event.preventDefault();

        let { doctor, city } = this.state;
        console.log(doctor, city);

        const url = encodeURI('https://rq5u8z4fq3.execute-api.us-east-1.amazonaws.com/dev/doctors/location/' + city);

        fetch(url)
            .then(results => {
                return results.json();
            })
            .then(providers => {
                this.setState({
                    showCards: true,
                    showSearch: false,
                    providers: providers
                })
            })
    }
}

const styles = {
    providerForm: {
        paddingTop: '50px'
    }
}