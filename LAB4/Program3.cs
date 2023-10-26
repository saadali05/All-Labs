// using System;
// using System.Collections;
// namespace ArrayWorking
// {
//     class Program3
//     {
//         static void Main(string[] args)
//         {
//             Console.WriteLine("Enter your First no:");
//             double num1 = Convert.ToInt32(Console.ReadLine());

//             Console.WriteLine("Enter your Second no:");
//             double num2 = Convert.ToInt32(Console.ReadLine());

//             Console.WriteLine($"Even numbers between {num1} and {num2}:");
//             double start = Math.Min(num1, num2);
//             double end = Math.Max(num1, num2);

//             while (start <= end)
//             {
//                 if (start % 2 == 0)
//                 {
//                     Console.WriteLine(start);
//                 }
//                 start++;
//             }

//             Console.WriteLine($"Odd numbers between {num1} and {num2}:");
//             start = Math.Min(num1, num2); // Reset the start value
//             while (start <= end)
//             {
//                 if (start % 2 != 0)
//                 {
//                     Console.WriteLine(start);
//                 }
//                 start++;
//             }
//         }
//     }
// }