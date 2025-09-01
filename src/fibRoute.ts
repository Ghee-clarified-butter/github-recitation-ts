import { Request, Response } from 'express';

// Temporary placeholder - replace with actual import when fib.ts is fixed
const fibonacci = (n: number): number => {
  // Placeholder implementation or  can import when ready
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// TODO: Replace above with this line when fib.ts is properly exported:
// import fibonacci from './fib';

export default (req: Request, res: Response): void => {
  const { num } = req.params;
  
  // Parse the string parameter as integer
  const numValue = parseInt(num, 10);
  
  const fibN = fibonacci(numValue);
  let result = `fibonacci(${num}) is ${fibN}`;
  
  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }
  
  res.send(result);
};
