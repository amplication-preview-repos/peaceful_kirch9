import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  joiningDate?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
};
