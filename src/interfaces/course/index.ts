import { StudentInterface } from 'interfaces/student';
import { TeacherInterface } from 'interfaces/teacher';
import { EscolaInterface } from 'interfaces/escola';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  escola_id?: string;
  created_at?: any;
  updated_at?: any;
  student?: StudentInterface[];
  teacher?: TeacherInterface[];
  escola?: EscolaInterface;
  _count?: {
    student?: number;
    teacher?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  escola_id?: string;
}
