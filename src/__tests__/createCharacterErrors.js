import Character from '../classes/character';

test('сreating character with short name', () => {
  expect(() => {
    const character = new Character('b', 'Bowman');
    return character;
  }).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('сreating character with long name', () => {
  expect(() => {
    const character = new Character('b123456789ob', 'Zombie');
    return character;
  }).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('сreating character with wrong type', () => {
  expect(() => {
    const character = new Character('Bob', 'Horse');
    return character;
  }).toThrow(new Error('Неизвестное сушество'));
});
