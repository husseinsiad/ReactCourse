
import food from './food';
import { choice, romove} from './helper';

let fruits=choice(food);
console.log('All fruits from foood');
console.log(`here we go ${fruits}`)
console.log(`May i have another one`)
console.log(`here we go ${fruits}`)
  let lefOver=romove(food,fruits)
  console.log(lefOver)

 