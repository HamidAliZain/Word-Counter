import inquirer from "inquirer";
import showBanner from 'node-banner';

(async () => {
    await showBanner('Word Counter', "Type and check how many words you type");
})();
setTimeout(() => {
    async function wordCounter(): Promise<void> {
        let words = await inquirer.prompt({
            name: "words",
            type: 'input',
            message: 'Type Text Here'
        });
        let clearWhiteSpace = words.words.split(" ").join("").length;
        console.log(`You type ${clearWhiteSpace} words`);

    } wordCounter()
}, 1000) 