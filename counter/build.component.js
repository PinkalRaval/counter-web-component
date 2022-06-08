const fs = require('fs-extra');
    const concat = require('concat');
    
    build = async () =>{
        const files = [
            './dist/counter/runtime.js',
            './dist/counter/polyfills.js',
            './dist/counter/main.js'
          ];
        
          await fs.ensureDir('widget');
          await concat(files, 'widget/news-widget.js');
    }
    build();