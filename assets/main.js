for (let i = 0; i <= 100; i++) {     
    console.log(`Enter a number from 0 to 100: ${i}`);
}

for (let i1 = 21; i1 <= 57; i1++) {
    console.log(`Enter a number from 27 to 57: ${i1}`);
}

for (let i2 = 0; i2 <= 100; i2++) {
    if( i2 % 2 == 0) {
        console.log(`Ente reven numbers from 0 to 100: ${i2}`);
    }
}

let sum = 0;
for (let i3 = 0; i3 <= 100; i3++) {
    sum = sum +i3
}
console.log(`Enter sum a number from 1 to 100: ${sum}`);

for (let i4 = 3; i4 <= 1000; i4++) {
    for (let value = 2; value < 14; value++) {
        if (14 % value == 0) {
            break;
        }else if (14 == (value + 1)) {
            console.log(`Introduce prime numbers from 3 to 1000: ${i4}`)
        }

    }
}