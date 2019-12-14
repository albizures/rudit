import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переключиться: PerfectVerb = {
  name: Word('переключиться', 8),
  singular1stPerson: Word('переключусь', 8),
  singular2ndPerson: Word('переключишься', 8),
  singular3rdPerson: Word('переключится', 8),
  plural1stPerson: Word('переключимся', 8),
  plural2ndPerson: Word('переключитесь', 8),
  plural3rdPerson: Word('переключатся', 8),
  masculinePast: Word('переключился', 8),
  femininePast: Word('переключилась', 8),
  neuterPast: Word('переключилось', 8),
  pluralPast: Word('переключились', 8),
  imperativeInformal: Word('переключись', 8),
  imperativeFormal: Word('переключитесь', 8),
  imperfect: [],
};

perfectVerbs.set(переключиться.name.text, переключиться);

export { переключиться };