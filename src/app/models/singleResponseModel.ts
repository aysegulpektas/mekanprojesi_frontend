import { ResponceModel } from "./responceModel";


export interface SingleResponseModel<T> extends ResponceModel{
    data:T
}