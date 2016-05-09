var System = require('systemjs')
  /*  
   *  Include:
   *    System.transpiler = 'babel'; 
   *  to use Babel instead of Traceur or
   *    System.transpiler = 'typescript';
   *  to use TypeScript
   */

  System.transpiler = 'babel'

  console.log('OK')

  System.import('some-module').then(function(m) {
    console.log('loaded')
    console.log(m)
  })
