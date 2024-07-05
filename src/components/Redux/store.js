import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Actions
const FETCH_CART = 'FETCH_CART';
const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
const UPDATE_ITEM_QUANTITY_SUCCESS = 'UPDATE_ITEM_QUANTITY_SUCCESS';

// Action Creators
export const fetchCart = () => ({ type: FETCH_CART });
export const fetchCartSuccess = (cart) => ({ type: FETCH_CART_SUCCESS, payload: cart });
export const updateItemQuantity = (productId, quantityChange, operator) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: { productId, quantityChange, operator },
});
export const updateItemQuantitySuccess = () => ({ type: UPDATE_ITEM_QUANTITY_SUCCESS });

// Reducers
const initialState = {
  cart: {
    products: [],
    loading: false,
  },
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case FETCH_CART:
      return { ...state, loading: true };
    case FETCH_CART_SUCCESS:
      return { ...state, products: action.payload.products, loading: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

// Sagas
function* fetchCartSaga() {
  try {
    const token = localStorage.getItem("userToken");
    const response = yield call(axios.get, `${import.meta.env.VITE_API_URL}/cart`, 
      { headers: { Authorization: `AmanGRAD__${token}` } }
    );
    console.log(response);
    yield put(fetchCartSuccess(response.data.cart));
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

function* updateItemQuantitySaga(action) {
  const { productId, quantityChange, operator } = action.payload;
  try {
    // Simulate API call or dispatch async action
    yield put(updateItemQuantitySuccess());
  } catch (error) {
    console.error('Error updating quantity:', error);
  }
}

function* rootSaga() {
  yield all([
    takeLatest(FETCH_CART, fetchCartSaga),
    takeLatest(UPDATE_ITEM_QUANTITY, updateItemQuantitySaga),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
