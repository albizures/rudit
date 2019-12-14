import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приползти: PerfectVerb = {
  name: Word('приползти', 8),
  singular1stPerson: Word('приползу', 7),
  singular2ndPerson: Word('приползёшь', 2),
  singular3rdPerson: Word('приползёт', 2),
  plural1stPerson: Word('приползём', 2),
  plural2ndPerson: Word('приползёте', 9),
  plural3rdPerson: Word('приползут', 7),
  masculinePast: Word('приполз', 4),
  femininePast: Word('приползла', 8),
  neuterPast: Word('приползло', 8),
  pluralPast: Word('приползли', 8),
  imperativeInformal: Word('приползи', 7),
  imperativeFormal: Word('приползите', 7),
  imperfect: [],
};

perfectVerbs.set(приползти.name.text, приползти);

export { приползти };