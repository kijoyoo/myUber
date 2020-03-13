import { SayHelloQueryArgs, sayHelloResponse } from "src/types/graph";

const resolver = {
    Query: {
        sayHello : (_, args:SayHelloQueryArgs) : sayHelloResponse => {
            return{
                error: false,
                text: `Hello ${args.name}`
            };
        }
    }
};

export default resolver;