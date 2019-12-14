import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсунуть: PerfectVerb = {
  name: Word('подсунуть', 4),
  singular1stPerson: Word('подсуну', 4),
  singular2ndPerson: Word('подсунешь', 4),
  singular3rdPerson: Word('подсунет', 4),
  plural1stPerson: Word('подсунем', 4),
  plural2ndPerson: Word('подсунете', 4),
  plural3rdPerson: Word('подсунут', 4),
  masculinePast: Word('подсунул', 4),
  femininePast: Word('подсунула', 4),
  neuterPast: Word('подсунуло', 4),
  pluralPast: Word('подсунули', 4),
  imperativeInformal: Word('подсунь', 4),
  imperativeFormal: Word('подсуньте', 4),
  imperfect: [],
};

perfectVerbs.set(подсунуть.name.text, подсунуть);

export { подсунуть };