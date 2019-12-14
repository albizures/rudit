import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкатить: PerfectVerb = {
  name: Word('выкатить', 1),
  singular1stPerson: Word('выкачу', 1),
  singular2ndPerson: Word('выкатишь', 1),
  singular3rdPerson: Word('выкатит', 1),
  plural1stPerson: Word('выкатим', 1),
  plural2ndPerson: Word('выкатите', 1),
  plural3rdPerson: Word('выкатят', 1),
  masculinePast: Word('выкатил', 1),
  femininePast: Word('выкатила', 1),
  neuterPast: Word('выкатило', 1),
  pluralPast: Word('выкатили', 1),
  imperativeInformal: Word('выкати', 1),
  imperativeFormal: Word('выкатите', 1),
  imperfect: [],
};

perfectVerbs.set(выкатить.name.text, выкатить);

export { выкатить };