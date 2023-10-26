using System;

class Circle
{
    private double radius;

    public Circle(double r)
    {radius = r;}

    public double CalculateArea()
    {return Math.PI * radius * radius;}
}
class Triangle
{   private double baseLength;
    private double height;

    public Triangle(double b, double h)
    {   baseLength = b;
        height = h;}

    public double CalculateArea()
{return 0.5 * baseLength * height;}
}

class Program
{
    static void Main()
    {
        Circle myCircle = new Circle(5.0);
        Triangle myTriangle = new Triangle(6.0, 8.0);

        double circleArea = myCircle.CalculateArea();
        Console.WriteLine("Area of the Circle: " + circleArea);

        double triangleArea = myTriangle.CalculateArea();
        Console.WriteLine("Area of the Triangle: " + triangleArea);
    }
}
