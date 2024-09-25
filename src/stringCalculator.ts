// basic function 

// export function add(numbers: string): number {
//     if (!numbers) return 0;
//     return numbers.split(',').reduce((sum, num) => sum + Number(num), 0);
// }

// apply with multiple values with /n


export function add(numbers: string): number {
    if (!numbers) return 0;
    return numbers.split(/[\n,]/).reduce((sum, num) => sum + Number(num), 0);
}
