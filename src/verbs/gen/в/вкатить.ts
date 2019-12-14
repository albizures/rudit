import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкатить: PerfectVerb = {
  name: Word('вкатить', 4),
  singular1stPerson: Word('вкачу', 4),
  singular2ndPerson: Word('вкатишь', 2),
  singular3rdPerson: Word('вкатит', 2),
  plural1stPerson: Word('вкатим', 2),
  plural2ndPerson: Word('вкатите', 2),
  plural3rdPerson: Word('вкатят', 2),
  masculinePast: Word('вкатил', 4),
  femininePast: Word('вкатила', 4),
  neuterPast: Word('вкатило', 4),
  pluralPast: Word('вкатили', 4),
  imperativeInformal: Word('вкати', 4),
  imperativeFormal: Word('вкатите', 4),
  imperfect: [],
};

perfectVerbs.set(вкатить.name.text, вкатить);

export { вкатить };