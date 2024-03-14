export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "aaa"
    );
  }
  if (query.toLowerCase().includes("largest")) {

     const numbers = query.match(/\d+/g);
 
     if (numbers && numbers.length > 0) {
       const largest = Math.max(...numbers.map(Number));
       return largest.toString();
     } else {
       return "";
     }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);

    if (numbers && numbers.length >= 2) {
      const x = parseInt(numbers[0]);
      const y = parseInt(numbers[1]);
      
      const result = x + y;
      return result.toString();
    } else {
      return "";
    }
  }

  return "";
}
