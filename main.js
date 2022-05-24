// Câu 1:
/**
    Cho x = 1, y = 4. Chạy dòng code sau:
    if ((x > 1 || x < y) && ++y == 5) {
        x = 2;
    }
    Sau khi code được thực thi, giá trị của x và y là gì ? Vì sao?
 */

// let x = 1;
// let y = 4;

// if ((x > 1 || x < y) && ++y == 5) {
//     x = 2;
// }
// console.log(x);
// console.log(y);

/* Khi thực thi, giá trị của x và y sẽ trả về: x = 2 và y = 5 
   Giải thích:
    Ví sao nó lại có thể trả về 2 giá trị đó.Ở câu điều kiện đầu tiên
    ta sẽ kiểm tra nếu x > 1 hoặc x < y, ở đây x > 1 không thỏa mãn, tuy nhiên
    x < y lại thỏa mãn, toán tử Hoặc ( || ) sẽ trả về true nếu 1 trong 2 điều kiện
    thỏa mãn. (1)

    Tiếp theo ta sẽ kiểm tra khi ++y có bằng 5 không nếu nó đúng sẽ chạy còn
    còn ko sẽ ko chạy. Ở đây cụ thể + 1 cho y, y = y + 1 => y = 5 vì thế nó đúng (2)
    
    Kèm theo toán tử Và (&&) (Vì cả 2 điều kiện đều đúng vì thế nó sẽ thỏa mãn)
    Ta có (1) và (2) đều đúng 

    Sau đó gán x = 2
    
    => Kết quả trả về sẽ là x = 2 và y = 5
*/

// Câu 2:
/* 2. Cho 1 array A = [2, 1, 4, 3, 7] và 1 number B = 5. Viết 1 function
 nhận vào 2 biến A và B và trả ra các array con gồm những số 
 liền kề thuộc array A và có tổng bằng number B.
VD: array A = [2, 1, 4, 3, 7] -> 1 + 4 = 5
 */

function sumOfArray(newA, B){
    let array = [];
    for(var i = 0; i < newA.length; i++){
        if (newA[i] + newA[i + 1] == B){
            array.push(newA[i]);
            array.push(newA[i + 1]);
        }
        
    }
    return array;
}

// Câu 3:
/* 3. Tạo ra 1 function nhận vào 1 số nguyên và kiểm tra xem số nhập vào
 có phải là số nguyên tố hay không? Nếu số nhập vào là số nguyên tố thì 
 function cần trả là true, nếu ko phải số nguyên tố thì trả về false.

(Số nguyên tố là số chỉ chia hết cho 1 và chính nó).
 */

function prime_check(n){
    if (typeof n === 'number'){
    //Tạo 1 biến flag
        let flag = true;
        // Nếu n < 2 thì nó không phải là số nguyên tố
        if (n < 2) {
            flag = false;
        } else if (n == 2){
            flag = true;
        } else if (n % 2 == 0){
            flag = false;
        } else {
        // Lặp từ 3 đến n - 1 với bước nhảy là 2 (i+=2)
            for (var i = 3; i < Math.sqrt(n); i+=2)
            {
                if (n % i == 0){
                    flag = false;
                    break;
                }
            }
        }
        return flag;
    }      
}

// Câu 4:
/* 4. Tạo ra 1 function nhận vào 1 mốc thời gian (Date) và kiểm tra 
    xem mốc thời gian đó có thuộc năm nhuận (leap year) ko? 
    Nếu có thì function cần trả về true, nếu ko thì trả về false.
*/

// Các bước thực hiện:
    // Đầu tiên ta sẽ kiểm tra khối điều kiện đầu tiên 
    // year % 4 === 0, ở đây sẽ kiểm tra năm có chia hết cho 4 không nếu có thì là năm nhuận
    // mặc dù điều kiện chia hết cho 4 đã thỏa mãn tuy nhiên sẽ cần phải kiểm tra những năm tròn thế kỷ (có số 2 số cuối là số 0)
    // ta sẽ kiểm tra year % 100 !== 0 và year % 400 !==0 nếu cả 2 cái đều đúng thì nó sẽ là năm nhuận
    // Ở khối điều kiện thứ 2 
    // kiểm tra những năm tròn thế kỷ (có số 2 số cuối là số 0)
    // ta sẽ kiểm tra year % 100 !== 0 và year % 400 !==0 nếu cả 2 cái đều đúng thì nó sẽ là năm nhuận
    // Sau đó ta dùng toán tử Hoặc (||) để log ra màn hình/

function leapYear (year) {
    if ((year % 4 === 0 && year % 100 !==0 && year % 400 !==0)||( year % 100 === 0 && year % 400 === 0)){
        return true; 
    } else{
        return false;
    }
};

// Câu 5:
/* 5. Viết function nhận vào 1 chuỗi các ký tự (string) và đếm số lần xuất hiện của mỗi ký tự trong dãy 
(Có phần biệt chữ hoa và chữ thường)
VD: string A = ‘AAaacdcbb’  A = 2, a = 2, c = 2, b = 2, d = 1
*/

// Đầu tiên: tạo biến stringArr truyền vào chuỗi string được dùng làm tham số và sử dụng phương thức
// split để chia chuỗi string thành một danh sách chuỗi con có thứ tự.

// Sau đó tạo biến rs là một chuỗi rỗng
// Tạo biến count có biến là 1

// Tạo biến com truyền vào phần tử đầu tiên của chuỗi stringArr
// Vì stringArr ở trên được truyền vào 1 mảng chuỗi con do tham số string split ra

// Chạy vòng lặp để tiến hành lặp từng phần tử trong chuỗi

// Đầu tiên kiểm tra xem biến com có bằng phần tử nằm trong stringArr
// Nếu đúng tiến hành cộng dồn biến count

function changeString(string) {
    let stringArr = string.split("");
    let rs = "";
    let count = 1;
    let com = stringArr[0];
    for (let index = 1; index < stringArr.length; index++) {
        if (com == stringArr[index]) {
            count++;
        } 
        else {
            rs += `${com} = ${count} `;
            com = stringArr[index];
            count = 1;
        }
        if (index == stringArr.length - 1) {
            rs += `${com} = ${count} `;
        }
    }
    return rs;
}


// Câu 6:
/* 6. Viết function nhập vào 3 số a, b, c và tìm nghiệm của phương trình 
bậc 2: ax2 + bx + c = 0.*/

function decryptEqualation (a,b,c) {
    let x1, x2;
    let delta = b*b - 4 * a * c;
    if (delta < 0) {
        x1 = x2 = 0.0;
        return `Phuong trinh vo nghiem`;
    }else if (delta == 0){
        x1 = x2 = -b/ (2*a);
        return `Phuong trinh co nghiem kep x1 = x2 = ${x1}`;
    }else if (delta > 0) {
        delta = Math.sqrt(delta);
        x1 = (-b + delta) / (2*a);
        x2 = (-b - delta) / (2*a);
        return `Phuong trinh co 2 nghiệm x1, x2
                x1 = ${x1}
                x2 = ${x2}`;
    }
}

// Câu 7:
/* 7. Viết chương trình nhập vào một số n và in ra hình * có n hàng 
như sau:
n=3
*
**
***
n=4
*
**
***
****
*/

function drawTriangle (n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i ; j++){
            string += '*';
            console.log(string);
        }
    }
}

// Câu 8:
/*8. Cho 1 array A = [1, 199, 18, 2 , 17, 8, 5, 77]. Viết function 
nhận vào array A và trả về số lớn nhất trong array A. Viết tiếp 1 
function tương tự function trên nhưng trả về số bé nhất trong array A. */

let A = [1, 199, 18, 2, 17, 8, 5, 77];
let maxOfArray = () => Math.max(...A);

let minOfArray = () => Math.min(...A);

//Câu 9: 
/*9. Viết chương trình khởi tạo một chuỗi, sau đó nhập vào một ký tự c 
rồi đếm số lần ký tự c xuất hiện trong chuỗi.
VD: string S = ‘ISOMETHING’, c = ‘I’  I = 2
 */

let str = "ISOMETHING";

function countString(sub) {
    let count = 0;
    for (let i = 0; i < str.length; ++i) {
        //Cắt chuỗi con từ chuỗi ban đầu có cùng độ dài với ký tự chỉ định.
        //Sau đó so sánh chuỗi con này với ký tự chỉ định để đếm số lần xuất hiện
        if (str.substring(i, i + sub.length) == sub) { 
            count++;
        }
    }
    return `Ky tu: ${sub}: ${count}`;
}

// Câu 10: 
/* 10. Viết function nhận vào 1 số n và tính giai thừa của số n vừa
nhận (n!).*/

function tinhGiaiThua(n) {
    if(typeof n === 'number'){
        return `Giai thua cua ${n}: ${n * (n - 1)}`;
    }else {
        return `Du lieu nhap vao khong phai so`;
    }
}


function main() {
    // Q2:
    let myA = [2, 1, 4, 3, 7];
    let newA = [...myA];

    console.log('Quest 2: ', sumOfArray(newA, 5)); 

    // Q3: 
    console.log('Quest 3: ', prime_check(4));

    // Q4:
    console.log('Quest 4: ', leapYear(2000));

    // Q5: 
    console.log('Quest 5: ', changeString('AAaacdcbb'));

    // Q6: 
    console.log('Quest 6: ', decryptEqualation(3, 5, 2));

    // Q7: 
    console.log('Quest 7: ');
    console.log(drawTriangle(3));

    // Q8: 
    console.log('Quest 8: Max: ', maxOfArray());
    console.log('Quest 8: Min: ', minOfArray());

    // Q9: 
    let sub = 'I'
    console.log('Quest 9:', countString(sub));

    // Q10: 
    let n = 4;
    console.log('Quest 10:', tinhGiaiThua(n));
}

main();