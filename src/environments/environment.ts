// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  schoolId: '12345',
  GET_STUDENT_URL: 'http://3.141.92.8:8093/click-escuela/admin-core/school/' + '{schoolId}' + '/student?fullDetail=' + '{fullDetail}',
  POST_STUDENT_URL: 'http://3.141.92.8:8093/click-escuela/admin-core/school/' + '{schoolId}' + '/student',
  GRADES_URL: 'http://3.141.92.8:8093/click-escuela/teacher-core/school/{schoolId}/grade',
  TEACHERS_URL: 'http://3.141.92.8:8093/click-escuela/admin-core/school/{schoolId}/teacher',
  ACTIVITY_URL: 'http://3.141.92.8:8093/click-escuela/teacher-core/school/{schoolId}/activity',
  COURSE_URL: 'http://3.141.92.8:8093/click-escuela/teacher-core/school/{schoolId}/teacher/6219ad23-cdff-40e7-8462-73e693252f62/courses',
  STUDENT_URL: 'http://3.141.92.8:8093/click-escuela/student-core/school/{schoolId}/student/{studentId}/grades'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
