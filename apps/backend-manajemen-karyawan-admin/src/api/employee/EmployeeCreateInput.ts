import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  joiningDate?: Date | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  role?: RoleWhereUniqueInput | null;
};
