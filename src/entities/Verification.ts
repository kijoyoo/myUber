import {Column, Entity, BaseEntity,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert} from "typeorm"
import { verificationTarget } from "src/types/types";

const PHONE = "PHONE";
const EMAIL = "EMAIL";

@Entity()
class Verification extends BaseEntity{
    @PrimaryGeneratedColumn() id: number

    @Column({type:"text", enum: [PHONE,EMAIL] })
    target: verificationTarget;

    @Column({type:"text"})
    payload: string;

    @Column({type:"text"})
    key: string;

    @Column({type:"boolean", default:false})
    used: boolean;

    @CreateDateColumn() createAt: string;
    @UpdateDateColumn() updateAt: string;

    @BeforeInsert()
    createKey(): void {
        if(this.key === PHONE){
            this.key = Math.floor(Math.random()*10000).toString();
        }else if(this.key === EMAIL){
            this.key = Math.random().toString(36).substr(2);
        }
    }

}

export default Verification;