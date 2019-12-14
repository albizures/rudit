import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тужиться: PerfectVerb = {
  name: Word('тужиться', 1),
  singular1stPerson: Word('тужусь', 1),
  singular2ndPerson: Word('тужишься', 1),
  singular3rdPerson: Word('тужится', 1),
  plural1stPerson: Word('тужимся', 1),
  plural2ndPerson: Word('тужитесь', 1),
  plural3rdPerson: Word('тужатся', 1),
  masculinePast: Word('тужился', 1),
  femininePast: Word('тужилась', 1),
  neuterPast: Word('тужилось', 1),
  pluralPast: Word('тужились', 1),
  imperativeInformal: Word('тужься', 1),
  imperativeFormal: Word('тужьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(тужиться.name.text, тужиться);

export { тужиться };