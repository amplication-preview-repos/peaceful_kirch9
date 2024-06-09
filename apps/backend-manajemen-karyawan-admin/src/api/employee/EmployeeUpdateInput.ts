import { AttendanceUpdateManyWithoutEmployeesInput } from "./AttendanceUpdateManyWithoutEmployeesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutEmployeesInput;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  joiningDate?: Date | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  role?: RoleWhereUniqueInput | null;
};
