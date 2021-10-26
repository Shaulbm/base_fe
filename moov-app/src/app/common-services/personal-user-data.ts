// interface UserAttributes: {
//      [key: string]: {
//       string }
// }
export interface PersonalUserData {
    id: string;
    name: string;
    orgId: string;
    mail: string;
    role: number;
    managerId: string;
    status: string;
    currentIssue: string;
    trainingStage: string;
    motivations: { [key: string]: string };
    courseLesson: string;

}
