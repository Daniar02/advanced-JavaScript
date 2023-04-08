function init() {
    /* #################### Принцип единой ответственности. #################### */
    // class Character {
    //     #inventory = [];
    //     #health = 10;
    //
    //     pickItem(item) {
    //         this.#inventory.push(item);
    //     }
    //
    //     receiveDamage(damage) {
    //         this.#health -= damage;
    //     }
    // }
    //
    // class DB {
    //     save(item) {
    //         localStorage.setItem('char', item);
    //     }
    //
    //     load() {
    //         ///...
    //     }
    // }

    /* #################### Принцип открытости и закрытости. #################### */
    // class Treasure {
    //     value = 0;
    // }
    //
    // class Coin extends  Treasure {
    //     value = 1;
    // }
    //
    // class Crystal extends Treasure {
    //     value = 10;
    // }
    //
    // class Brilliant extends Treasure {
    //     value = 20;
    // }
    //
    // class Inventory {
    //     #score;
    //     pick(treasure) {
    //         this.#score += treasure.value;
    //         // if (treasure instanceof Coin) {
    //         //     this.#score += 1;
    //         // }
    //         // if (treasure instanceof Crystal) {
    //         //     this.#score += 10;
    //         // }
    //     }
    // }

    /* #################### Принцип подстановки Барбары Лисков. #################### */
    // class User {
    //     #role = 'user';
    //     getRole() {
    //         return this.#role;
    //     }
    // }
    //
    // class Admin extends User {
    //     role = ['user', 'admin'];
    //
    //     getRole() {
    //         return this.role.join(', ');
    //     }
    // }
    //
    // function logRole(user) {
    //     console.log(`Role: ${user.getRole().toUpperCase()}`)
    // }
    // logRole(new User());
    // logRole(new Admin());

    /* #################### Принцип разделения интерфейса. #################### */
    // class Weapon {
    //     cost;
    //
    //     dealDamage() {
    //
    //     }
    // }
    //
    // class Rifle extends Weapon {
    //     strike() {
    //         this.dealDamage();
    //         // удар 🔥
    //     };
    // }
    //
    // class Sword extends Weapon {
    //     strike() {
    //         this.dealDamage();
    //         // удар 🔥
    //     };
    // }


}
export default init;