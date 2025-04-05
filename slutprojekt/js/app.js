const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenELements = document.querySelectorAll(".hidden");
hiddenELements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function() {
    // Interactive code examples with "Try it" buttons
    const codeExamples = document.querySelectorAll('.code-example');
    
    codeExamples.forEach(example => {
      const codeBlock = example.querySelector('code');
      const tryButton = document.createElement('button');
      tryButton.textContent = 'Run Code';
      tryButton.className = 'try-button';
      
      tryButton.addEventListener('click', function() {
        const resultArea = example.querySelector('.result-area') || createResultArea();
        try {
          // For HTML examples
          if (codeBlock.classList.contains('html')) {
            resultArea.innerHTML = codeBlock.textContent;
          } 
          // For CSS examples (applied to the result area)
          else if (codeBlock.classList.contains('css')) {
            const style = document.createElement('style');
            style.textContent = codeBlock.textContent;
            resultArea.innerHTML = '<div class="css-demo-element">CSS Applied Element</div>';
            resultArea.appendChild(style);
          }
          // For JS examples
          else if (codeBlock.classList.contains('js')) {
            const result = eval(codeBlock.textContent);
            resultArea.textContent = result !== undefined ? `Result: ${result}` : 'Code executed successfully';
          }
        } catch (error) {
          resultArea.textContent = `Error: ${error.message}`;
          resultArea.style.color = 'red';
        }
        
        function createResultArea() {
          const area = document.createElement('div');
          area.className = 'result-area';
          example.appendChild(area);
          return area;
        }
      });
      
      example.appendChild(tryButton);
    });
  });

