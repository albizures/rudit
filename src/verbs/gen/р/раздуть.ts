import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздуть: PerfectVerb = {
  name: Word('раздуть', 4),
  singular1stPerson: Word('раздую', 4),
  singular2ndPerson: Word('раздуешь', 4),
  singular3rdPerson: Word('раздует', 4),
  plural1stPerson: Word('раздуем', 4),
  plural2ndPerson: Word('раздуете', 4),
  plural3rdPerson: Word('раздуют', 4),
  masculinePast: Word('раздул', 4),
  femininePast: Word('раздула', 4),
  neuterPast: Word('раздуло', 4),
  pluralPast: Word('раздули', 4),
  imperativeInformal: Word('раздуй', 4),
  imperativeFormal: Word('раздуйте', 4),
  imperfect: [],
};

perfectVerbs.set(раздуть.name.text, раздуть);

export { раздуть };