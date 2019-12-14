import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оползти: PerfectVerb = {
  name: Word('оползти', 6),
  singular1stPerson: Word('оползу', 5),
  singular2ndPerson: Word('оползёшь', 5),
  singular3rdPerson: Word('оползёт', 5),
  plural1stPerson: Word('оползём', 5),
  plural2ndPerson: Word('оползёте', 5),
  plural3rdPerson: Word('оползут', 5),
  masculinePast: Word('ополз', 2),
  femininePast: Word('оползла', 6),
  neuterPast: Word('оползло', 6),
  pluralPast: Word('оползли', 6),
  imperativeInformal: Word('оползи', 5),
  imperativeFormal: Word('оползите', 5),
  imperfect: [],
};

perfectVerbs.set(оползти.name.text, оползти);

export { оползти };