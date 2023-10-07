
// ## Task 1: Remove Duplicates from an Array
const arr1 = [3, 4, 5, 2, 3, 4, 5, 6]
function RemoveDuplicate(arr) {
    let obj = {}
    let i = 0
    while (i < arr.length) {
        obj[arr[i]] = arr[i]
        i++
    }

    return Object.values(obj)
}

console.log(RemoveDuplicate(arr1), "Duplicate Item Removed")



// ## Task 2: Remove Duplicates from an Array using Bubble Sort for Sorting
const arr2 = [3, 4, 5, 2, 3, 4, 5, 6]
function BubbleSort(arr, type) {
    let i = 0
    while (i < arr.length) {
        if (arr[i] > arr[i + 1]) {
            let tmp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = tmp
            i = i === 0 ? i : i - 1
        } else {
            i++
        }
    }
    return RemoveDuplicate(arr)

}
console.log(BubbleSort(arr2), "Remove Duplicate Item with sorted using BubbleSort")


// ## Task 3: Rotate the Array by k
let arr4 = [1, 2, 4, 5, 6, 7]
function RotetByK(arr,k){
    let i = arr.length-k
    console.log(i)
    let output = []
    while (i < arr.length) {
        output.push(arr[i])
        i++
    }
    i =0
    while(i < arr.length-k){
        output.push(arr[i])
        i++
    }
    return output
}
console.log(RotetByK(arr4, 2) , "Rotated by K")


// ## Task 4: Reverse Array in Sorted Order using Bubble Sort
const arr3 = [3, 4, 5, 6, 1, 8]
function SortDesc(arr) {
    let i = 0
    while (i < arr.length) {
        if (arr[i] < arr[i + 1]) {
            let tmp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = tmp
            i = i === 0 ? i : i - 1
        } else {
            i++
        }
    }
    return arr
}

console.log(SortDesc(arr3), "Array sorted Descending Order")


// ## Task 5: Traverse a 2D Array - Print column-wise reverse
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function ColumnWiseReverce(arr) {
    let i = arr.length - 1
    let j = 0
    let counter = 0
    let output = []
    while (counter < 9) {
        output.push(arr[i][j])
        if (i === 0) {
            i = arr.length - 1
            j++
        } else {
            i--
        }
        counter++
    }
    return output
}

console.log(ColumnWiseReverce(matrix1), "Column wise reverse Array")

// ## Task 6: Go in Zig-Zag
const matrix2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2],
]
function Ziczac(arr) {
    let i = 0
    let j = arr[0].length - 1
    let counter = 0
    let limit = 1
    let output = []
    while (counter < (arr.length * arr[0].length)) {
        output.push(arr[i][j])
        if (j > 0 && i % 2 === 0) {
            j--
        } else if ((j == 0 || j === arr[0].length - 1) && counter === 4 * limit + (limit - 1)) {
            i++
            limit++
        } else {
            j++
        }
        counter++
    }
    return output
}
console.log(Ziczac(matrix2), "Zig Zag Array")



// ## Task 7: Transpose the Matrix
const matrix3 = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4]
]

function ConverRowToColumn(arr) {
    let i = 0
    let output = []

    while (i < arr.length) {
        output.push([])
        i++
    }
    i = 0
    while (i < arr.length) {
        let j = 0
        while (j < arr[i].length) {
            output[j][i] = arr[i][j]
            j++
        }
        i++
    }
    return output
}

console.log(ConverRowToColumn(matrix3), " Transposed the Matrix")


// ## Task 8: Rotate By 90
const matrix4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]
]

function Rotate90(arr) {
    let i = 0
    let output = []
    let j = arr.length - 1
    let tmp = []
    while (i < arr.length && j >= 0) {
        tmp.push(arr[i][j])
        if (i == arr.length - 1) {
            output.push(tmp)
            tmp = []
            j--
            i = 0

        } else {
            i++
        }
    }

    return output
}

console.log(Rotate90(matrix4), "Rotet 90deg")


// ## Task 9: N Traversal
const matrix5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function NTraversal(arr) {
    let i = arr.length - 1
    let counter = 0
    let j = 0
    let output = []
    while (counter < ((arr.length ** 2) - 2)) {
        output.push(arr[i][j])
        if (i > 0 && (j === 0 || j === arr.length - 1)) {
            i--
        } else if (i >= 0) {
            i++
            j++
        }
        counter++
    }
    return output
}

console.log(NTraversal(matrix5), "N Traversal")


// ## Task 10: Z Traversal
function ZTraversal(arr) {
    let i = 0
    let j = 0
    let counter = 0
    let output = []
    while (counter < (arr.length ** 2) - 2) {
        output.push(arr[i][j])
        if (j < arr.length - 1 && i === 0) {
            j++
        } else if (i < arr.length - 1 && j >= 0) {
            i++
            j--
        } else {
            j++
        }
        counter++
    }
    return output
}

console.log(ZTraversal(matrix5), "Z Traversal")


// ## Task 11: Print the boundary
function PrintBoundry(arr) {
    let i = 0
    let j = 0
    let counter = 0
    let output = []
    while (counter < (arr.length ** 2) - 1) {
        output.push(arr[i][j])

        if (j < arr.length - 1 && i == 0) {
            j++
        } else if (j > 0 && i < arr.length - 1) {
            i++
        } else if (i > 0 && j > 0) {
            j--
        } else {
            i--
        }
        counter++
    }
    return output
}

console.log(PrintBoundry(matrix5), "Printed the boundary")


// ## Task 12: Print the elements without the border
const matrix6 = [
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [19, 20, 21, 22],
    [23, 24, 25, 26],
]
function PrintwithOutBorder(arr) {
    let i = 0
    let output = []
    while (i < arr.length) {
        let j = 0
        while (j < arr.length) {
            if (!(i === arr.length - 1 || i === 0) && !(j === arr.length - 1 || j === 0)) {
                output.push(arr[i][j])
            }
            j++
        }
        i++
    }
    return output

}
console.log(PrintwithOutBorder(matrix6), "Print matrix Without border")