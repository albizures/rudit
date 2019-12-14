import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const созреть: PerfectVerb = {
  name: Word('созреть', 4),
  singular1stPerson: Word('созрею', 4),
  singular2ndPerson: Word('созреешь', 4),
  singular3rdPerson: Word('созреет', 4),
  plural1stPerson: Word('созреем', 4),
  plural2ndPerson: Word('созреете', 4),
  plural3rdPerson: Word('созреют', 4),
  masculinePast: Word('созрел', 4),
  femininePast: Word('созрела', 4),
  neuterPast: Word('созрело', 4),
  pluralPast: Word('созрели', 4),
  imperativeInformal: Word('созрей', 4),
  imperativeFormal: Word('созрейте', 4),
  imperfect: ['зреть'],
};

perfectVerbs.set(созреть.name.text, созреть);

export { созреть };