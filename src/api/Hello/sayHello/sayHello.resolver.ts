import { Greeting } from "src/types/graph";

const resolver = {
    Query: {
        sayHello : () : Greeting => {
            return{
                error: false,
                text: "love you"
            };
        }
    }
};

export default resolver;