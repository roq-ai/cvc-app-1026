const mapping: Record<string, string> = {
  courses: 'course',
  escolas: 'escola',
  students: 'student',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
