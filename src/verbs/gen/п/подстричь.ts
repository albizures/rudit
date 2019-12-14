import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстричь: PerfectVerb = {
  name: Word('подстричь', 6),
  singular1stPerson: Word('подстригу', 8),
  singular2ndPerson: Word('подстрижёшь', 6),
  singular3rdPerson: Word('подстрижёт', 6),
  plural1stPerson: Word('подстрижём', 6),
  plural2ndPerson: Word('подстрижёте', 10),
  plural3rdPerson: Word('подстригут', 8),
  masculinePast: Word('подстриг', 6),
  femininePast: Word('подстригла', 6),
  neuterPast: Word('подстригло', 6),
  pluralPast: Word('подстригли', 6),
  imperativeInformal: Word('подстриги', 8),
  imperativeFormal: Word('подстригите', 8),
  imperfect: [],
};

perfectVerbs.set(подстричь.name.text, подстричь);

export { подстричь };