const arr = ['Аня', 'Игорь', 'Марина', 'Таня', 'Олег', 'Алексей', 'Вика']

function printArr(arr, index = 0) {
    console.log(arr[index]);
    if (index < arr.length) {
        printArr(arr, ++index)
    }
}

printArr(arr)
