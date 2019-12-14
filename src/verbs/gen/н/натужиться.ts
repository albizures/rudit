import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натужиться: PerfectVerb = {
  name: Word('натужиться', 3),
  singular1stPerson: Word('натужусь', 3),
  singular2ndPerson: Word('натужишься', 3),
  singular3rdPerson: Word('натужится', 3),
  plural1stPerson: Word('натужимся', 3),
  plural2ndPerson: Word('натужитесь', 3),
  plural3rdPerson: Word('натужатся', 3),
  masculinePast: Word('натужился', 3),
  femininePast: Word('натужилась', 3),
  neuterPast: Word('натужилось', 3),
  pluralPast: Word('натужились', 3),
  imperativeInformal: Word('натужься', 3),
  imperativeFormal: Word('натужьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(натужиться.name.text, натужиться);

export { натужиться };