import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from 'uuid'

@Entity("transactions")
class Transaction{

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;
    
    @Column()
    type: string;
    @Column()
    category: string;
    @Column()
    amount: number
    @CreateDateColumn()  
    createdAt?: Date

    constructor() {
        if (!this.id) {
            this.id=uuidV4()
        }
    }

}

export {Transaction}