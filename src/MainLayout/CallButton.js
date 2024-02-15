import React from 'react';

const CallButton = ({ phoneNumber }) => {
    const handleCall = () => {
        // Construct the tel URL with the phone number
        const telUrl = `tel:${phoneNumber}`;

        // Open the phone dialer with the tel URL
        window.open(telUrl);
    };

    return (
        <button onClick={handleCall}>Call</button>
    );
};

export default CallButton;
