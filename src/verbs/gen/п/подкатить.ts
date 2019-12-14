import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкатить: PerfectVerb = {
  name: Word('подкатить', 6),
  singular1stPerson: Word('подкачу', 6),
  singular2ndPerson: Word('подкатишь', 4),
  singular3rdPerson: Word('подкатит', 4),
  plural1stPerson: Word('подкатим', 4),
  plural2ndPerson: Word('подкатите', 4),
  plural3rdPerson: Word('подкатят', 4),
  masculinePast: Word('подкатил', 6),
  femininePast: Word('подкатила', 6),
  neuterPast: Word('подкатило', 6),
  pluralPast: Word('подкатили', 6),
  imperativeInformal: Word('подкати', 6),
  imperativeFormal: Word('подкатите', 6),
  imperfect: [],
};

perfectVerbs.set(подкатить.name.text, подкатить);

export { подкатить };