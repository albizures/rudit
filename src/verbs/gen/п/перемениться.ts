import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемениться: PerfectVerb = {
  name: Word('перемениться', 7),
  singular1stPerson: Word('переменюсь', 7),
  singular2ndPerson: Word('переменишься', 5),
  singular3rdPerson: Word('переменится', 5),
  plural1stPerson: Word('переменимся', 5),
  plural2ndPerson: Word('переменитесь', 5),
  plural3rdPerson: Word('переменятся', 5),
  masculinePast: Word('переменился', 7),
  femininePast: Word('переменилась', 7),
  neuterPast: Word('переменилось', 7),
  pluralPast: Word('переменились', 7),
  imperativeInformal: Word('переменись', 7),
  imperativeFormal: Word('переменитесь', 7),
  imperfect: [],
};

perfectVerbs.set(перемениться.name.text, перемениться);

export { перемениться };