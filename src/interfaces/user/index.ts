import { StudentInterface } from 'interfaces/student';
import { TeacherInterface } from 'interfaces/teacher';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  student: StudentInterface[];
  teacher: TeacherInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
