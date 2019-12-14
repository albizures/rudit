import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наползти: PerfectVerb = {
  name: Word('наползти', 7),
  singular1stPerson: Word('наползу', 6),
  singular2ndPerson: Word('наползёшь', 1),
  singular3rdPerson: Word('наползёт', 1),
  plural1stPerson: Word('наползём', 1),
  plural2ndPerson: Word('наползёте', 1),
  plural3rdPerson: Word('наползут', 6),
  masculinePast: Word('наполз', 3),
  femininePast: Word('наползла', 7),
  neuterPast: Word('наползло', 7),
  pluralPast: Word('наползли', 7),
  imperativeInformal: Word('наползи', 6),
  imperativeFormal: Word('наползите', 6),
  imperfect: [],
};

perfectVerbs.set(наползти.name.text, наползти);

export { наползти };