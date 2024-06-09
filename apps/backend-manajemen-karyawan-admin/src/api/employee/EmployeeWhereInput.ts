import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeWhereInput = {
  attendances?: AttendanceListRelationFilter;
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  joiningDate?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
};
