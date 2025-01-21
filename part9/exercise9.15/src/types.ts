interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface DescriptiveCoursePart extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends DescriptiveCoursePart {
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends DescriptiveCoursePart {
  description: string;
  backgroundMaterial: string;
  kind: "background";
}

interface CoursePartSpecial extends DescriptiveCoursePart {
  requirements: string[];
  kind: "special";
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;
