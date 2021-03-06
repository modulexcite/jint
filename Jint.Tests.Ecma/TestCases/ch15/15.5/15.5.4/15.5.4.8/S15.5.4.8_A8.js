// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The String.prototype.lastIndexOf.length property has the attribute DontEnum
 *
 * @path ch15/15.5/15.5.4/15.5.4.8/S15.5.4.8_A8.js
 * @description Checking if enumerating the String.prototype.lastIndexOf.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.lastIndexOf.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.lastIndexOf.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.lastIndexOf.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.lastIndexOf.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.lastIndexOf.propertyIsEnumerable(\'length\') return false. Actual: '+String.prototype.lastIndexOf.propertyIsEnumerable('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
count=0;

for (p in String.prototype.lastIndexOf){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String.prototype.lastIndexOf){if (p==="length") count++;}; count === 0. Actual: '+count );
}
//
//////////////////////////////////////////////////////////////////////////////

