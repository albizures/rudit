import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переправиться: PerfectVerb = {
  name: Word('переправиться', 6),
  singular1stPerson: Word('переправлюсь', 6),
  singular2ndPerson: Word('переправишься', 6),
  singular3rdPerson: Word('переправится', 6),
  plural1stPerson: Word('переправимся', 6),
  plural2ndPerson: Word('переправитесь', 6),
  plural3rdPerson: Word('переправятся', 6),
  masculinePast: Word('переправился', 6),
  femininePast: Word('переправилась', 6),
  neuterPast: Word('переправилось', 6),
  pluralPast: Word('переправились', 6),
  imperativeInformal: Word('переправься', 6),
  imperativeFormal: Word('переправьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(переправиться.name.text, переправиться);

export { переправиться };