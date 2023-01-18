import fs from 'fs'

function legsCounter(pathToFile:string){
    type FarmBreeds = { pigs: number, chickens: number, cows: number}
    let totalLegs:number = 0
    let numberOfLegs:FarmBreeds={ pigs: 4, chickens: 2, cows: 4 }
    let dataFromFile: string=''
    try {
        dataFromFile = fs.readFileSync(pathToFile).toString()
    } catch (error) {
        console.log('Somthing is wrong with the file '+ error)
        return
    }
    let animals:FarmBreeds = JSON.parse(dataFromFile)

    for(let akey in animals){
        switch(akey){
            case 'pigs':numberOfLegs.pigs*= animals[akey]|0; totalLegs+=numberOfLegs.pigs; break;
            case 'chickens':numberOfLegs.chickens*= animals[akey]|0; totalLegs+=numberOfLegs.chickens; break;
            case 'cows':numberOfLegs.cows*= animals[akey]|0; totalLegs+=numberOfLegs.cows; break;
        }
    }
    console.log("Total legs of farm animals: " + totalLegs)
}

legsCounter('animals.json')