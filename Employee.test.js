const Employee = require('../lib/Employee');

test('Instantiantes new Employee instance', () => {
    const e = new Employee();
    expect(type(e).toBe('object'));
})