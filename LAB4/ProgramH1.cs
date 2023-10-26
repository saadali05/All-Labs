// using System;

// namespace ArrayWorking
// {
//     class ProgramH1
//     {
//         static void Main(string[] args)
//         {
//             Console.Write("Please enter a string: ");
//             string student_name = Console.ReadLine();
//             string[] students = { "Saad", "Abdullah", "Daniyal", "Anas" };
//             int students_len = students.Length;
//             bool found = false;
//             for (int i = 0; i < students_len; i++)
//             {
//                 if (students[i] == student_name)
//                 {
//                     found = true;
//                     break;
//                 }
//             }
//             if (found)
//             {
//                 Console.WriteLine(student_name + " is found.");
//             }
//             else
//             {
//                 Console.WriteLine(student_name + " is not found.");
//             }
//         }
//     }
// }