import Character from '../classCharacter';

test('сreating character', () => {
  const params = {
    name: 'Bob',
    type: 'Bowman',
  };
  const character = new Character(params);
  expect(character).toBeInstanceOf(Character);
});

test('сreating character with name error', () => {
  const params = {
    name: 'B',
    type: 'Bowman',
  };
  expect(() => {
    const character = new Character(params);
    return character;
  }).toThrow(new Error('Некорректная длина имени'));
});

test('сreating character with type error', () => {
  const params = {
    name: 'Bob',
    type: 'Bowma',
  };
  expect(() => {
    const character = new Character(params);
    return character;
  }).toThrow(new Error('Вы используете несуществующий тип'));
});

test.each([
  ['Bob', 'Bowman', 100, 1, 25, 25],
  ['Bob', 'Swordsman', 100, 1, 40, 10],
  ['Bob', 'Magician', 100, 1, 10, 40],
  ['Bob', 'Undead', 100, 1, 25, 25],
  ['Bob', 'Zombie', 100, 1, 40, 10],
  ['Bob', 'Daemon', 100, 1, 10, 40],
])('сreating character %s %s type', (name, type, health, level, attack, defence) => {
  const character = new Character({ name, type });
  expect(character.health).toBe(health);
  expect(character.level).toBe(level);
  expect(character.attack).toBe(attack);
  expect(character.defence).toBe(defence);
});
