// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * RegularExpressionFirstChar :: BackslashSequence :: \LineTerminator is incorrect
 *
 * @path ch07/7.8/7.8.5/S7.8.5_A1.5_T6.js
 * @description Paragraph separator, with eval
 */

//CHECK#1
try {
   eval("/\\\u2029/").source;
   $ERROR('#1.1: RegularExpressionFirstChar :: BackslashSequence :: \\Paragraph separator is incorrect. Actual: ' + (eval("/\\\u2029/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionFirstChar :: BackslashSequence :: \\Paragraph separator is incorrect. Actual: ' + (e));
  }
}     

