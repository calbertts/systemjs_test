var System = require('systemjs')
  /*  
   *  Include:
   *    System.transpiler = 'babel'; 
   *  to use Babel instead of Traceur or
   *    System.transpiler = 'typescript';
   *  to use TypeScript
   */

  System.transpiler = 'babel'
  System.loaderErrorStack = true

  console.log('OK')

  System.import('some-module').then(function(m) {
    console.log('loaded') // Never executed
    console.log(m.p)	  // Never executed
  })

  console.log('end')

  setTimeout(() => {
    console.log('timeout')
  }, 3000)
