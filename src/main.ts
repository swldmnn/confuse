
import { parse } from "@std/yaml";
import { Model } from "./types.ts";

function validateModel(model: Model) {
    //TODO
    //ensure unique value ids
    //ensure valid option definitions
    //ensure valid contraints/evaluation rules
}

async function run() {
    const filename = 'models/confuse_me.yml'
    const fileContent = await Deno.readTextFile(filename);
    const model: Model = parse(fileContent) as Model;

    validateModel(model)
    const modelValues: Map<string, string|undefined> = new Map() 
    for(const optionId in model.options ) {
        modelValues.set(optionId, undefined)
    }

    for(const valueId in model.evaluations.values ) {
        modelValues.set(valueId, undefined)
    }

    console.log(modelValues)
}

await run()