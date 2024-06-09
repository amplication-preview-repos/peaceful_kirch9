import { Attendance } from "../attendance/Attendance";
import { Department } from "../department/Department";
import { Role } from "../role/Role";

export type Employee = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  firstName: string | null;
  id: string;
  joiningDate: Date | null;
  lastName: string | null;
  phoneNumber: string | null;
  role?: Role | null;
  updatedAt: Date;
};
