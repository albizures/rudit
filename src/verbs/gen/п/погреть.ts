import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погреть: PerfectVerb = {
  name: Word('погреть', 4),
  singular1stPerson: Word('погрею', 4),
  singular2ndPerson: Word('погреешь', 4),
  singular3rdPerson: Word('погреет', 4),
  plural1stPerson: Word('погреем', 4),
  plural2ndPerson: Word('погреете', 4),
  plural3rdPerson: Word('погреют', 4),
  masculinePast: Word('погрел', 4),
  femininePast: Word('погрела', 4),
  neuterPast: Word('погрело', 4),
  pluralPast: Word('погрели', 4),
  imperativeInformal: Word('погрей', 4),
  imperativeFormal: Word('погрейте', 4),
  imperfect: [],
};

perfectVerbs.set(погреть.name.text, погреть);

export { погреть };