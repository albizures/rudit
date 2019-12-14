import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поползти: PerfectVerb = {
  name: Word('поползти', 7),
  singular1stPerson: Word('поползу', 6),
  singular2ndPerson: Word('поползёшь', 6),
  singular3rdPerson: Word('поползёт', 6),
  plural1stPerson: Word('поползём', 6),
  plural2ndPerson: Word('поползёте', 6),
  plural3rdPerson: Word('поползут', 6),
  masculinePast: Word('пополз', 3),
  femininePast: Word('поползла', 7),
  neuterPast: Word('поползло', 7),
  pluralPast: Word('поползли', 7),
  imperativeInformal: Word('поползи', 6),
  imperativeFormal: Word('поползите', 6),
  imperfect: [],
};

perfectVerbs.set(поползти.name.text, поползти);

export { поползти };