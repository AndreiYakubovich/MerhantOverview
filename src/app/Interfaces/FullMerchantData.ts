import { Transaction } from "./transaction";

export class FullMerchantData {
    name: string;
    pricing : {
        subsidy: number;
    }    
    transactions: Transaction[];
}
