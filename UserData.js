const fs = require('fs');

const files = fs.readdirSync('archivo')
const userModuleMappings = files.map((name) => JSON.parse(fs.readFileSync(`./archivo/${name}`)));
const modulesMap = {};

userModuleMappings.forEach((umm) => {
    const modules = Object.keys(umm.provider);
    for(let moduleName of modules) {
        const provider = umm.provider[moduleName]
        if (!modulesMap.hasOwnProperty(moduleName)) {
            modulesMap[moduleName] = {};
        }
        if (!modulesMap[moduleName].hasOwnProperty(provider)) {
            modulesMap[moduleName][provider] = [umm.name];
        } else {
            modulesMap[moduleName][provider].push(umm.name)
        }
    };
});
fs.writeFile('DataUser.json',JSON.stringify(modulesMap), function (err){
    if (err) return console.log(err);
})
