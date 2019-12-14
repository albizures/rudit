import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подползти: PerfectVerb = {
  name: Word('подползти', 8),
  singular1stPerson: Word('подползу', 7),
  singular2ndPerson: Word('подползёшь', 7),
  singular3rdPerson: Word('подползёт', 7),
  plural1stPerson: Word('подползём', 7),
  plural2ndPerson: Word('подползёте', 7),
  plural3rdPerson: Word('подползут', 7),
  masculinePast: Word('подполз', 4),
  femininePast: Word('подползла', 8),
  neuterPast: Word('подползло', 8),
  pluralPast: Word('подползли', 8),
  imperativeInformal: Word('подползи', 7),
  imperativeFormal: Word('подползите', 7),
  imperfect: [],
};

perfectVerbs.set(подползти.name.text, подползти);

export { подползти };