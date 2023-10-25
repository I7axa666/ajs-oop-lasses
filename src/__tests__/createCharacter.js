import Character from '../classes/character';
import Bowman from '../classes/bowman';
import Daemon from '../classes/daemon';
import Magician from '../classes/magician';
import Swordsman from '../classes/swordsman';
import Undead from '../classes/undead';
import Zombie from '../classes/zombie';

test.each([
  ['Bob', Bowman, 100, 1, 25, 25],
  ['Bob', Swordsman, 100, 1, 40, 10],
  ['Bob', Magician, 100, 1, 10, 40],
  ['Bob', Undead, 100, 1, 25, 25],
  ['Bob', Zombie, 100, 1, 40, 10],
  ['Bob', Daemon, 100, 1, 10, 40],
])('сreating character %s %s type', (name, Type, health, level, attack, defence) => {
  const character = new Type({ name });
  expect(character.health).toBe(health);
  expect(character.level).toBe(level);
  expect(character.attack).toBe(attack);
  expect(character.defence).toBe(defence);
});

test('сreating character', () => {
  const character = new Bowman('Bob');
  expect(character).toBeInstanceOf(Character);
});
