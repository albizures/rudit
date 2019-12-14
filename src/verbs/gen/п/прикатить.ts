import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикатить: PerfectVerb = {
  name: Word('прикатить', 6),
  singular1stPerson: Word('прикачу', 6),
  singular2ndPerson: Word('прикатишь', 4),
  singular3rdPerson: Word('прикатит', 4),
  plural1stPerson: Word('прикатим', 4),
  plural2ndPerson: Word('прикатите', 4),
  plural3rdPerson: Word('прикатят', 4),
  masculinePast: Word('прикатил', 6),
  femininePast: Word('прикатила', 6),
  neuterPast: Word('прикатило', 6),
  pluralPast: Word('прикатили', 6),
  imperativeInformal: Word('прикати', 6),
  imperativeFormal: Word('прикатите', 6),
  imperfect: [],
};

perfectVerbs.set(прикатить.name.text, прикатить);

export { прикатить };