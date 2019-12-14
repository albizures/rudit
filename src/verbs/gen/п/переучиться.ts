import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переучиться: PerfectVerb = {
  name: Word('переучиться', 6),
  singular1stPerson: Word('переучусь', 6),
  singular2ndPerson: Word('переучишься', 4),
  singular3rdPerson: Word('переучится', 4),
  plural1stPerson: Word('переучимся', 4),
  plural2ndPerson: Word('переучитесь', 4),
  plural3rdPerson: Word('переучатся', 4),
  masculinePast: Word('переучился', 6),
  femininePast: Word('переучилась', 6),
  neuterPast: Word('переучилось', 6),
  pluralPast: Word('переучились', 6),
  imperativeInformal: Word('переучись', 6),
  imperativeFormal: Word('переучитесь', 6),
  imperfect: [],
};

perfectVerbs.set(переучиться.name.text, переучиться);

export { переучиться };