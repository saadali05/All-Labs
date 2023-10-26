// using System;

// class ProgramH3
// {
//     static void Main()
//     {
//         int[,] array = new int[4, 4]
//         {
//             {1, 2, 3, 4},
//             {2, 1, 4, 3},
//             {3, 4, 1, 2},
//             {4, 3, 2, 1}
//         };

//         int sumDiagonal = 0;

//         for (int i = 0; i < 4; i++)
//         {
//             sumDiagonal += array[i, i];
//         }

//         Console.WriteLine("2D Array:");

//         for (int i = 0; i < 4; i++)
//         {
//             for (int j = 0; j < 4; j++)
//             {
//                 Console.Write(array[i, j] + "\t");
//             }
//             Console.WriteLine();
//         }

//         Console.WriteLine("Sum of the main diagonal: " + sumDiagonal);
//     }
// }
