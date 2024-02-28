import { StoreType } from "@/modules/store/domain/store";
import { UserStore } from "./user.store";

export class Store implements StoreType {
    user = new UserStore()
}
