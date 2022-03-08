const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('03/08/2022');
    expect(format_date(date)).toBe('03/08/2022');
});