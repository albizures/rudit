import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплатить: PerfectVerb = {
  name: Word('оплатить', 5),
  singular1stPerson: Word('оплачу', 5),
  singular2ndPerson: Word('оплатишь', 3),
  singular3rdPerson: Word('оплатит', 3),
  plural1stPerson: Word('оплатим', 3),
  plural2ndPerson: Word('оплатите', 3),
  plural3rdPerson: Word('оплатят', 3),
  masculinePast: Word('оплатил', 5),
  femininePast: Word('оплатила', 5),
  neuterPast: Word('оплатило', 5),
  pluralPast: Word('оплатили', 5),
  imperativeInformal: Word('оплати', 5),
  imperativeFormal: Word('оплатите', 5),
  imperfect: [],
};

perfectVerbs.set(оплатить.name.text, оплатить);

export { оплатить };