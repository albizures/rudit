import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переполошиться: PerfectVerb = {
  name: Word('переполошиться', 9),
  singular1stPerson: Word('переполошусь', 9),
  singular2ndPerson: Word('переполошишься', 9),
  singular3rdPerson: Word('переполошится', 9),
  plural1stPerson: Word('переполошимся', 9),
  plural2ndPerson: Word('переполошитесь', 9),
  plural3rdPerson: Word('переполошатся', 9),
  masculinePast: Word('переполошился', 9),
  femininePast: Word('переполошилась', 9),
  neuterPast: Word('переполошилось', 9),
  pluralPast: Word('переполошились', 9),
  imperativeInformal: Word('переполошись', 9),
  imperativeFormal: Word('переполошитесь', 9),
  imperfect: [],
};

perfectVerbs.set(переполошиться.name.text, переполошиться);

export { переполошиться };