import Bowman from '../classes/bowman';
import Daemon from '../classes/daemon';
import Magician from '../classes/magician';
import Zombie from '../classes/zombie';

test('character damage', () => {
  const character = new Magician('Bob');
  character.damage(100);
  expect(character.health).toBe(40);
});

test('character damage death', () => {
  const character = new Bowman('Bob');
  character.health = 1;
  character.damage(100);
  expect(character.health).toBe(0);
});

test('character levelUp with error', () => {
  const character = new Zombie('Bob');
  character.damage(200);
  expect(() => {
    character.levelUp();
  }).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('character levelUp', () => {
  const character = new Daemon('Bob');
  character.levelUp();
  expect(character.level).toBe(2);
});
