import { Type } from "@angular/core"
import { BaseComponent } from "../dyna-comps/baseComponent"

export interface ComponentInfo{
  component: Type<BaseComponent>,
  data: ComponentData
}

export interface ComponentData{
  content: string,
  otherInfo?: any,
  colspan: number,
  rowspan: number
}
