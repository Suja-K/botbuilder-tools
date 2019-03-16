import { missingArgumentValidatorFactory } from '../../../src/utils/validators/missing-argument-validator';

describe('Missing argument validator', () => {
	it('should resolve with true when passed arguments exist.', async done => {
		await missingArgumentValidatorFactory([['arg1']])
			.execute({ arg1: 'Exists' })
			.then(value => {
				expect(value).toBeTruthy();
				done();
			});
	});

	it('should resolve with true when at least one of the passed arguments exists.', async done => {
		await missingArgumentValidatorFactory([['arg1', 'arg2']])
			.execute({ arg1: 'Exists' })
			.then(value => {
				expect(value).toBeTruthy();
				done();
			});
	});

	it('should resolve with true when at least one of the passed arguments exists.', async done => {
		await missingArgumentValidatorFactory([['arg1', 'arg2']])
			.execute({ arg1: 'Exists' })
			.then(value => {
				expect(value).toBeTruthy();
				done();
			});
	});

	it('should resolve when state and args are empty.', async done => {
		await missingArgumentValidatorFactory([])
			.execute({ arg1: 'Exists' })
			.then(value => {
				expect(value).toBeTruthy();
				done();
			});
	});

	it('should reject with the missing args bag when none of its arguments exist and output correct error message.', async done => {
		await missingArgumentValidatorFactory([['arg1'], ['arg3', 'arg4']])
			.execute({ arg3: 'Exists' })
			.catch(data => {
				expect(data).toEqual({
					code: 0,
					data: ['arg1'],
					message: 'The option ("arg1") is required.'
				});
				done();
			});
	});

	it('should reject with the missing args bag when none of its arguments exist and output correct error message.', async done => {
		await missingArgumentValidatorFactory([['arg1', 'arg2'], ['arg3', 'arg4']])
			.execute({ arg3: 'Exists' })
			.catch(data => {
				expect(data).toEqual({
					code: 0,
					data: ['arg1', 'arg2'],
					message: 'At least one of the options ["arg1","arg2"] is required.'
				});
				done();
			});
	});
});
