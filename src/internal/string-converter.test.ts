import { expect } from '@open-wc/testing';

import { stringConverter } from './string-converter';

describe('stringConverter', () => {
	describe('fromAttribute', () => {
		it('should return an empty string for null input', () => {
			expect(stringConverter.fromAttribute(null)).equal('');
		});

		it('should return an empty string for empty string input', () => {
			expect(stringConverter.fromAttribute('')).equal('');
		});

		it('should return the input string for non-empty string input', () => {
			expect(stringConverter.fromAttribute('hello')).equal('hello');
		});

		it('should handle strings with whitespace', () => {
			expect(stringConverter.fromAttribute(' hello world ')).equal(' hello world ');
		});
	});

	describe('toAttribute', () => {
		it('should return null for empty string input', () => {
			expect(stringConverter.toAttribute('')).equal(null);
		});

		it('should return the input string for non-empty string input', () => {
			expect(stringConverter.toAttribute('hello')).equal('hello');
		});

		it('should handle strings with whitespace', () => {
			expect(stringConverter.toAttribute(' hello world ')).equal(' hello world ');
		});

		it('should handle strings with only whitespace', () => {
			expect(stringConverter.toAttribute('   ')).equal('   ');
		});
	});
});
