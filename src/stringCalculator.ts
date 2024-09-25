// basic function 

// export function add(numbers: string): number {
//     if (!numbers) return 0;
//     return numbers.split(',').reduce((sum, num) => sum + Number(num), 0);
// }

// apply with multiple values with /n


// export function add(numbers: string): number {
//     if (!numbers) return 0;
//     return numbers.split(/[\n,]/).reduce((sum, num) => sum + Number(num), 0);
// }



//To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.

export function add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(`[${parts[0].slice(2)}]`);
        numbers = parts[1];
    }

    return numbers.split(delimiter).reduce((sum, num) => sum + Number(num), 0);
}