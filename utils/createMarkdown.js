function createMarkdown(data) {
    return `
    # ${data.title}
              
    ## Description
    ${data.Description}
              
              
    ## Table of Contents
    -  [Installation](#Installation)  
    -  [Usage](#Usage)  
    -  [License](#License)  
    -  [Contributors](#Contributors)  
    -  [Tests](#Tests)  
    -  [Questions](#Questions)  
                  
              
    ## Installation  
    ${data.Installation}  
                
              
    ## Usage  
    ${data.Usage}   
                
              
    ## Contributors  
    ${data.Contributing}  
                
              
    ## Tests   
    ${data.Tests}  
                
              
    ## Questions  
    ${(data.github) ? `Please feel free to reach me at [${data.github}](https://github.com/${data.github}) for any clarifying questions or ways to collaborate` : ""}    
              
    ${(data.email) ? `Contact me via email at [${data.email}](${data.email}) if you need further assiatnce` : ""}   
    `;
    }
    
    module.exports = createMarkdown;