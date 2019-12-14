import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подуть: PerfectVerb = {
  name: Word('подуть', 3),
  singular1stPerson: Word('подую', 3),
  singular2ndPerson: Word('подуешь', 3),
  singular3rdPerson: Word('подует', 3),
  plural1stPerson: Word('подуем', 3),
  plural2ndPerson: Word('подуете', 3),
  plural3rdPerson: Word('подуют', 3),
  masculinePast: Word('подул', 3),
  femininePast: Word('подула', 3),
  neuterPast: Word('подуло', 3),
  pluralPast: Word('подули', 3),
  imperativeInformal: Word('подуй', 3),
  imperativeFormal: Word('подуйте', 3),
  imperfect: [],
};

perfectVerbs.set(подуть.name.text, подуть);

export { подуть };