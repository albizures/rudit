import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вползти: PerfectVerb = {
  name: Word('вползти', 6),
  singular1stPerson: Word('вползу', 5),
  singular2ndPerson: Word('вползёшь', 5),
  singular3rdPerson: Word('вползёт', 5),
  plural1stPerson: Word('вползём', 5),
  plural2ndPerson: Word('вползёте', 5),
  plural3rdPerson: Word('вползут', 5),
  masculinePast: Word('вполз', 2),
  femininePast: Word('вползла', 6),
  neuterPast: Word('вползло', 6),
  pluralPast: Word('вползли', 6),
  imperativeInformal: Word('вползи', 5),
  imperativeFormal: Word('вползите', 5),
  imperfect: [],
};

perfectVerbs.set(вползти.name.text, вползти);

export { вползти };