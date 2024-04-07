export const postData = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "accept": "*/*",
                "password": "test@123456",
                "uniqueInteractionId": "ewewe",
                "user-name": "test_admin",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
export const postDataSignUp = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "accept": "*/*",
                "password": "test@123456",
                "uniqueInteractionId": "ewewe",
                "user-name": "test_admin",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
export const getProductList = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "accept": "*/*",
                "password": "test@123456",
                "uniqueInteractionId": "ewewe",
                "user-name": "test_admin",
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
export const getOrdersList = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "accept": "*/*",
                "password": "test@123456",
                "uniqueInteractionId": "ewewe",
                "user-name": "test_admin",
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
export const postPlaceOrder = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "accept": "*/*",
                "password": "test@123456",
                "uniqueInteractionId": "ewewe",
                "user-name": "test_admin",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};