const createReadMe = (answers) => 
`
# ${answers.title}
              
## Description
${answers.description}
          
          
## Table of Contents
-  [Installation](#installation)  
-  [Usage](#usage)  
-  [License](#license)  
-  [Contributors](#contributors)  
-  [Tests](#tests)  
-  [Questions](#questions)  
                        
## Installation  
${answers.installation}  
                      
## Usage  
${answers.usage}   
                      
## Contributors  
${answers.contributing}  

## Tests   
${answers.tests}  
                        
## Questions  
${(answers.github) ? `Please feel free to reach me at [${answers.github}](https://github.com/${answers.github}) for any clarifying questions or ways to collaborate` : ""}    
          
${(answers.email) ? `Contact me via email at [${answers.email}](${answers.email}) if you need further assiatnce` : ""}   
`;

module.exports = createReadMe;
