// external
import { equal, deepEqual } from 'assert-helpers'
import kava from 'kava'

// local
import readable, { isReadable } from './index.js'

const file = 'README.md'
const dir = '.'

kava.suite('@bevry/fs-readable', function (suite, test) {
	test('boolean works as expected', function (done) {
		;(async function () {
			equal(await isReadable(file), true, 'file is readable')
			equal(await isReadable(dir), true, 'dir is readable')
			equal(await isReadable('missing'), false, 'missing file is not readable')
			deepEqual(
				await isReadable([file, dir, 'missing']),
				[true, true, false],
				'readable combination is as expected'
			)
		})()
			.then(() => done())
			.catch((err: any) => done(err))
	})
	test('throw works as expected (part 1)', function (done) {
		;(async function () {
			await readable(file)
			await readable(dir)
			await readable([file, dir])
		})()
			.then(() => done())
			.catch((err: any) => done(err))
	})
	test('throw works as expected (part 2)', function (done) {
		;(async function () {
			await readable('missing')
		})()
			.then(() => done(new Error('failed to fail')))
			.catch(() => done())
	})
})
