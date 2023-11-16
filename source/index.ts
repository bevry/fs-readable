import { accessible, isAccessible, R_OK } from '@bevry/fs-accessible'

/** Returns a Promise that rejects with an error if the path is not readable. */
export function readable(path: string): Promise<void> {
	return accessible(path, R_OK)
}

/** Returns a Promise that resolves to a boolean indicating if the path is readable or not. */
export function isReadable(path: string): Promise<boolean> {
	return isAccessible(path, R_OK)
}
