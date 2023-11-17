// external
import accessible, { isAccessible, R_OK } from '@bevry/fs-accessible'

/** Returns a Promise that rejects with an error if the path is not readable. */
export function readable(path: string | Array<string>): Promise<void> {
	return accessible(path, R_OK)
}
export default readable

/** Returns a Promise that resolves to a boolean indicating if the path is readable or not. */
export function isReadable(path: string): Promise<boolean>
export function isReadable(path: Array<string>): Promise<Array<boolean>>
export function isReadable(
	path: string | Array<string>
): Promise<boolean | Array<boolean>> {
	if (Array.isArray(path)) {
		return Promise.all(path.map((i) => isReadable(i)))
	}
	return isAccessible(path, R_OK)
}
