declare type Combinable = number | string;
declare type ConversionDescriptor = 'as-number' | 'as-text';
declare function combine(input1: number | string, input2: Combinable, resultConversion: 'as-number' | 'as-text'): any;
declare const resultOfCombine: any;
declare const resultOfCombineAge: any;
declare const combinedNames: any;
declare const resultOfCombineTest: any;
