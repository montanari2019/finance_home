import { ReactNode } from "react";
import { ROUTE_TYPES } from "~/routes/types.enum";

export interface SwipeBackGestureModel {
    children: ReactNode;
    fromWhere: ROUTE_TYPES;
  }