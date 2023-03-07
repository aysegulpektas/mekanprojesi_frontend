import { ResponceModel } from "./responceModel";

export interface ListResponseModel <T> extends ResponceModel{
    data:T[];
}