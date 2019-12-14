import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскинуть: PerfectVerb = {
  name: Word('раскинуть', 4),
  singular1stPerson: Word('раскину', 4),
  singular2ndPerson: Word('раскинешь', 4),
  singular3rdPerson: Word('раскинет', 4),
  plural1stPerson: Word('раскинем', 4),
  plural2ndPerson: Word('раскинете', 4),
  plural3rdPerson: Word('раскинут', 4),
  masculinePast: Word('раскинул', 4),
  femininePast: Word('раскинула', 4),
  neuterPast: Word('раскинуло', 4),
  pluralPast: Word('раскинули', 4),
  imperativeInformal: Word('раскинь', 4),
  imperativeFormal: Word('раскиньте', 4),
  imperfect: [],
};

perfectVerbs.set(раскинуть.name.text, раскинуть);

export { раскинуть };