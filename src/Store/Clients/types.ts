export type ClientType = {
	name: string;
	contactPerson: string;
	email: string;
	phone: string;
	address: string;
	taxName: string;
	taxPercentage: string;
	taxNumber: string;
};
export const CLIENT_POST_LOADING = "CLIENT_POST_LOADING";
export const CLIENT_POST_SUCCESS = "CLIENT_POST_SUCCESS";
export const CLIENT_POST_ERROR = "CLIENT_POST_ERROR";

export const CLIENTS_GET_LOADING = "CLIENTS_GET_LOADING";
export const CLIENTS_GET_SUCCESS = "CLIENTS_GET_SUCESS";
export const CLIENTS_GET_ERROR = "CLIENTS_GET_ERROR";

export interface ClientsGetSuccess {
	type: typeof CLIENTS_GET_SUCCESS;
	payload: ClientType[];
}

export interface ClientsGetLoading {
	type: typeof CLIENTS_GET_LOADING;
	payload: boolean;
}

export interface ClientsGetError {
	type: typeof CLIENTS_GET_ERROR;
	payload: boolean;
}

export interface ClientPostLoading {
	type: typeof CLIENT_POST_LOADING;
	payload: boolean;
}

export interface ClientPostSuccess {
	type: typeof CLIENT_POST_SUCCESS;
	payload: boolean;
}
export interface ClientPostError {
	type: typeof CLIENT_POST_ERROR;
	payload: boolean;
}

export type ClientDispatchHandler =
	| ClientsGetSuccess
	| ClientsGetLoading
	| ClientsGetError
	| ClientPostLoading
	| ClientPostError
	| ClientPostSuccess;
