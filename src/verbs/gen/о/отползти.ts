import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отползти: PerfectVerb = {
  name: Word('отползти', 7),
  singular1stPerson: Word('отползу', 6),
  singular2ndPerson: Word('отползёшь', 0),
  singular3rdPerson: Word('отползёт', 0),
  plural1stPerson: Word('отползём', 0),
  plural2ndPerson: Word('отползёте', 8),
  plural3rdPerson: Word('отползут', 6),
  masculinePast: Word('отполз', 3),
  femininePast: Word('отползла', 7),
  neuterPast: Word('отползло', 7),
  pluralPast: Word('отползли', 7),
  imperativeInformal: Word('отползи', 6),
  imperativeFormal: Word('отползите', 6),
  imperfect: [],
};

perfectVerbs.set(отползти.name.text, отползти);

export { отползти };