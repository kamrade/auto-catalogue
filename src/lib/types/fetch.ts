export type FetchFunctionType = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>