const initialState = [];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addProduct':
            fetch('http://localhost:4000/add-product', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(action.payload),
            })
                .then((response) => response.json())
                .then((response) => console.log(response));
            return state;
        default:
            return state;
    }
};

export default rootReducer;
