class Character {
  constructor(params) {
    this.name = params.name;
    this.type = params.type;
    this.health = params.health;
    this.level = params.level;
    this.attack = params.attack;
    this.defence = params.defence;
    this.validClass();
    this.defaultParams();
  }

  validClass() {
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Некорректная длина имени');
    }

    if (!types.includes(this.type)) {
      throw new Error('Вы используете несуществующий тип');
    }
  }

  defaultParams() {
    this.health = 100;
    this.level = 1;

    if (this.type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    }

    if (this.type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    }

    if (this.type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    }

    if (this.type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }

    if (this.type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }

    if (this.type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }

    this.level += 1;
    this.health = 100;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export default Character;
