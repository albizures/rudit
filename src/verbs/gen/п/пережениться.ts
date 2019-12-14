import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережениться: PerfectVerb = {
  name: Word('пережениться', 7),
  singular1stPerson: Word('переженюсь', 7),
  singular2ndPerson: Word('переженишься', 5),
  singular3rdPerson: Word('переженится', 5),
  plural1stPerson: Word('переженимся', 5),
  plural2ndPerson: Word('переженитесь', 5),
  plural3rdPerson: Word('переженятся', 5),
  masculinePast: Word('переженился', 7),
  femininePast: Word('переженилась', 7),
  neuterPast: Word('переженилось', 7),
  pluralPast: Word('переженились', 7),
  imperativeInformal: Word('переженись', 7),
  imperativeFormal: Word('переженитесь', 7),
  imperfect: [],
};

perfectVerbs.set(пережениться.name.text, пережениться);

export { пережениться };