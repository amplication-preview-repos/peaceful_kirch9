import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
