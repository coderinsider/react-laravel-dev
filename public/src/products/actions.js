export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const createProduct = text => {{
	type: CREATE_PRODUCT,
	payload: {text}
}}

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const updateProduct = text => {{
	type: UPDATE_PRODUCT,
	payload: {text}
}}
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const deleteProduct = text => {{
	type: DELETE_PRODUCT,
	payload: {text}
}}