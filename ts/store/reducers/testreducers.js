export function testreducer(state={}, object){
    switch(object.type){
        case "test":
            console.log("raboti");
            return;
        default:
            return state;

    }
}