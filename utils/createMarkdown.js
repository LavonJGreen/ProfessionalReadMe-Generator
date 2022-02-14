function createMarkdown(answers) {
    return `
    ## Title
     ${answers.Title}
              
    ## Description
    ${answers.Description}
              
              
    ## Table of Contents
    -  [Installation](#Installation)  
    -  [Usage](#Usage)  
    -  [License](#License)  
    -  [Contributors](#Contributors)  
    -  [Tests](#Tests)  
    -  [Questions](#Questions)  
                  
              
    ## Installation  
    ${answers.Installation}  
                
              
    ## Usage  
    ${answers.Usage}   
                
              
    ## Contributors  
    ${answers.Contributing}  
                
              
    ## Tests   
    ${answers.Tests}  
                
              
    ## Questions  
    ${(answers.github) ? `Please feel free to reach me at [${answers.github}](https://github.com/${answers.github}) for any clarifying questions or ways to collaborate` : ""}    
              
    ${(answers.email) ? `Contact me via email at [${answers.email}](${answers.email}) if you need further assiatnce` : ""}   
    `;
    }
    
    module.exports = createMarkdown;