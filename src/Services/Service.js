// export const postData = async (body) => {
//     try {
//         var myHeaders = new Headers();
//         myHeaders.append("accept", "application/json");
//         myHeaders.append("password", "test@123456");
//         myHeaders.append("uniqueInteractionId", "ewewe");
//         myHeaders.append("user-name", "test_admin");
//         myHeaders.append("Content-Type", "application/json");
//         // myHeaders.append("Sec-Fetch-Mode", "cors");
//         // myHeaders.append("Sec-Fetch-Des", "empty");
//         // myHeaders.append("Sec-Fetch-Site", "same-origin");

//         // var raw = JSON.stringify(body);

//         // var requestOptions = {
//         //     method: 'POST',
//         //     headers: myHeaders,
//         //     body: raw,
//         //     redirect: 'follow'
//         // };
//         let requestURL = `http://localhost:8081/kit/profile/v1/profile/signin`
//         const response = await fetch(requestURL, {
//             method: 'POST',
//             headers: {
//                 "accept": "*/*",
//                 "password": "test@123456",
//                 "uniqueInteractionId": "ewewe",
//                 "user-name": "test_admin",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body),
//             redirect: 'follow'
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error posting data:', error);
//         throw error;
//     }
// };
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