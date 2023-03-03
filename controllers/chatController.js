const methods = {};
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
methods.getAnswer = (req) => {
  
    return new Promise(async(resolve, reject) => {
       try{
        openai.createCompletion({
            model: "text-davinci-001",
            prompt: req.body.question,
          }).then((data)=>{
            resolve({status:200,message:data.data.choices[0].text});

          });

       }catch(e){
          reject(e);
       }
    })
}

module.exports = methods;