import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сползти: PerfectVerb = {
  name: Word('сползти', 6),
  singular1stPerson: Word('сползу', 5),
  singular2ndPerson: Word('сползёшь', 2),
  singular3rdPerson: Word('сползёт', 2),
  plural1stPerson: Word('сползём', 2),
  plural2ndPerson: Word('сползёте', 7),
  plural3rdPerson: Word('сползут', 5),
  masculinePast: Word('сполз', 2),
  femininePast: Word('сползла', 6),
  neuterPast: Word('сползло', 6),
  pluralPast: Word('сползли', 6),
  imperativeInformal: Word('сползи', 5),
  imperativeFormal: Word('сползите', 5),
  imperfect: [],
};

perfectVerbs.set(сползти.name.text, сползти);

export { сползти };