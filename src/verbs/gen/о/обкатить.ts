import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкатить: PerfectVerb = {
  name: Word('обкатить', 5),
  singular1stPerson: Word('обкачу', 5),
  singular2ndPerson: Word('обкатишь', 3),
  singular3rdPerson: Word('обкатит', 3),
  plural1stPerson: Word('обкатим', 3),
  plural2ndPerson: Word('обкатите', 3),
  plural3rdPerson: Word('обкатят', 3),
  masculinePast: Word('обкатил', 5),
  femininePast: Word('обкатила', 5),
  neuterPast: Word('обкатило', 5),
  pluralPast: Word('обкатили', 5),
  imperativeInformal: Word('обкати', 5),
  imperativeFormal: Word('обкатите', 5),
  imperfect: [],
};

perfectVerbs.set(обкатить.name.text, обкатить);

export { обкатить };