// using System;
// using System.Collections;
// namespace ArrayWorking
// {
//     class Program1
//     {
//         static void Main(string[] args)
//         {
//             Console.WriteLine("Enter your First no:");
//             double first_no = Convert.ToInt32(Console.ReadLine());
//             Console.WriteLine("Enter your Second no:");
//             double second_no = Convert.ToInt32(Console.ReadLine());
//             Console.WriteLine("Select operation and enter number along with it.");
//             Console.WriteLine("1: Divide, 2: Multiply, 3:Addition, 4:Subtraction");
//             Console.WriteLine("Enter operation no:");
//             double operation = Convert.ToInt32(Console.ReadLine());
//             if (operation == 1){
//                 double div_num = first_no / second_no;
//                 Console.WriteLine("Division of both numbers is "+ first_no + " / "+ second_no + " = " + div_num);
//             }
//             else if (operation == 2) {
//                 double mul_num = first_no * second_no;
//                 Console.WriteLine("Division of both numbers is "+ first_no + " x "+ second_no + " = " + mul_num);
//             }
//             else if (operation == 3) {
//                 double add_num = first_no + second_no;
//                 Console.WriteLine("Division of both numbers is "+ first_no + " + "+ second_no + " = " + add_num);
//             }
//             else if (operation == 4) {
//                 double sub_num = first_no - second_no;
//                 Console.WriteLine("Division of both numbers is "+ first_no + " - "+ second_no + " = " + sub_num);
//             }                
//         }
//     }
// }