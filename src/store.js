import { createStore } from "redux";

const intialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ''
};

function reducer(state = intialState, action) {

    switch (action.type) {
        case 'account/deposit':
            return {
                ...state,
                balance: state.balance + action.payload
            };

        case 'account/withdraw':
            return {
                ...state,
                balance: state.balance - action.payload
            };
        case 'account/requestLoan':
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose
            };
        case 'account/payLoan':
            return {
                ...state,
                balance: state.balance - state.loan,
                loan: 0,
                loanPurpose: ''
            };

        default:
            return state;
    }
}

const store = createStore(reducer);

function deposit(amount) {
    return { type: 'account/deposit', payload: amount };
}

function withdraw(amount) {
    return { type: 'account/withdraw', payload: amount };
}

function requestLoan(amount, purpose) {
    return { type: 'account/requestLoan', payload: { amount, purpose } };
}

function payLoan() {
    return { type: 'account/payLoan' };
}

// console.log(store.getState());
// store.dispatch({ type: 'account/deposit', payload: 1000 });
// console.log(store.getState());
// store.dispatch({ type: 'account/withdraw', payload: 200 });
// console.log(store.getState());
// store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'Would like to buy a car' } });
// console.log(store.getState());
// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState());

console.log(store.getState());
store.dispatch(deposit(1000));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'Would like to buy a car'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());
