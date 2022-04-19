import Cat from "./classes/Cat.js"

const cat = new Cat(0,0,0);
cat.showCat();

cat.spendTime(5);
cat.showCat();
cat.feed(5);
cat.showCat();
cat.sleep(5);
cat.showCat();