import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздвинуть: PerfectVerb = {
  name: Word('раздвинуть', 5),
  singular1stPerson: Word('раздвину', 5),
  singular2ndPerson: Word('раздвинешь', 5),
  singular3rdPerson: Word('раздвинет', 5),
  plural1stPerson: Word('раздвинем', 5),
  plural2ndPerson: Word('раздвинете', 5),
  plural3rdPerson: Word('раздвинут', 5),
  masculinePast: Word('раздвинул', 5),
  femininePast: Word('раздвинула', 5),
  neuterPast: Word('раздвинуло', 5),
  pluralPast: Word('раздвинули', 5),
  imperativeInformal: Word('раздвинь', 5),
  imperativeFormal: Word('раздвиньте', 5),
  imperfect: [],
};

perfectVerbs.set(раздвинуть.name.text, раздвинуть);

export { раздвинуть };