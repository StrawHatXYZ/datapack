import React from 'react'

export class Confirm extends React.Component<{nextStep: any, prevStep: any, values: any}> {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { name, email, phone, password, facebook, twitter, github,confpassword }
        } = this.props;

        return (
            <div className="form-container text-black">
                <h1 className="mb-5">Confirm</h1>
                <ul className="list-group">
                    <li className="list-group-item">Name: {name}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone Number: {phone}</li>
                    <li className="list-group-item">Password: {password}</li>
                    <li className="list-group-item">Password: {confpassword}</li>
                    <li className="list-group-item">Facebook URL: <a href={facebook}>{facebook}</a></li>
                    <li className="list-group-item">Twitter URL: <a href={twitter}>{twitter}</a></li>
                    <li className="list-group-item">Github URL: <a href={github}>{github}</a></li>
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm