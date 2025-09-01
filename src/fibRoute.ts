import { Request, Response } from 'express';
import fibonacci from './fib';

export default (req: Request, res: Response): void => {
  const { num } = req.params;
  
  // Ensure num is a string and can be parsed as integer
  const numValue = parseInt(num as string, 10);
  
  const fibN = fibonacci(numValue);
  let result = `fibonacci(${num}) is ${fibN}`;
  
  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }
  
  res.send(result);
};
