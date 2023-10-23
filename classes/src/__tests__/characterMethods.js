import Character from '../classCharacter';

test('character damage', () => {
  const params = {
    name: 'Bob',
    type: 'Bowman',
  };
  const character = new Character(params);
  character.damage(100);
  expect(character.health).toBe(25);
});

test('character damage death', () => {
  const params = {
    name: 'Bob',
    type: 'Bowman',
  };
  const character = new Character(params);
  character.health = 1;
  character.damage(100);
  expect(character.health).toBe(0);
});

test('character levelUp with error', () => {
  const params = {
    name: 'Bob',
    type: 'Bowman',
  };
  const character = new Character(params);
  character.damage(200);
  expect(() => {
    character.levelUp();
  }).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('character levelUp', () => {
  const params = {
    name: 'Bob',
    type: 'Bowman',
  };
  const character = new Character(params);
  character.levelUp();
  expect(character.level).toBe(2);
});
