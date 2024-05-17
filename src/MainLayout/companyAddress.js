import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const CompanyDetails = () => {
    const address = "PLOT NO.212-A, NEW INDUSTRIAL AREA-II MANDIDEEP, Mandideep Huzur Bhopal MP 462046 IN";

    // Google Map API Key
    const apiKey = 'AIzaSyDUMMYAPIKEY-abcdefghijklmnopqrstuvwxyz1234567890';

    // Coordinates for the company address
    const coordinates = {
        lat: 23.1111,
        lng: 77.5123
    };

    return (
        <div>
            <h2>Contact Details</h2>
            <p>Email ID: sriyaanindustries@yahoo.com</p>
            <p>Website: <a href="/home">Click here to add</a></p>
            <h3>Address:</h3>
            <p>{address}</p>
            {/* <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: apiKey }}
                    defaultCenter={coordinates}
                    defaultZoom={15}
                >
                    <AnyReactComponent
                        lat={coordinates.lat}
                        lng={coordinates.lng}
                        text="SRIYAAN INDUSTRIES PRIVATE LIMITED"
                    />
                </GoogleMapReact>
            </div> */}
        </div>
    );
};

export default CompanyDetails;
