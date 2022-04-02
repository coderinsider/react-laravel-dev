import { CREATE_PRODUCT, UPDATE_PRODUCT } from './actions'
export const product = (state, action) => {
	const { type, payload } = state;
	switch(type) {
		case CREATE_PRODUCT: {
			const { text } = payload;
			const newProduct = {
				text,
				isCompleted: false
			};
			return state.concat(newProduct)
		}
		case UPDATE_PRODUCT: {

		}
	}

	return state;
}