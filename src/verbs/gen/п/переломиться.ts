import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переломиться: PerfectVerb = {
  name: Word('переломиться', 7),
  singular1stPerson: Word('переломлюсь', 8),
  singular2ndPerson: Word('переломишься', 5),
  singular3rdPerson: Word('переломится', 5),
  plural1stPerson: Word('переломимся', 5),
  plural2ndPerson: Word('переломитесь', 5),
  plural3rdPerson: Word('переломятся', 5),
  masculinePast: Word('переломился', 7),
  femininePast: Word('переломилась', 7),
  neuterPast: Word('переломилось', 7),
  pluralPast: Word('переломились', 7),
  imperativeInformal: Word('переломись', 7),
  imperativeFormal: Word('переломитесь', 7),
  imperfect: [],
};

perfectVerbs.set(переломиться.name.text, переломиться);

export { переломиться };