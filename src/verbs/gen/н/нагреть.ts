import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагреть: PerfectVerb = {
  name: Word('нагреть', 4),
  singular1stPerson: Word('нагрею', 4),
  singular2ndPerson: Word('нагреешь', 4),
  singular3rdPerson: Word('нагреет', 4),
  plural1stPerson: Word('нагреем', 4),
  plural2ndPerson: Word('нагреете', 4),
  plural3rdPerson: Word('нагреют', 4),
  masculinePast: Word('нагрел', 4),
  femininePast: Word('нагрела', 4),
  neuterPast: Word('нагрело', 4),
  pluralPast: Word('нагрели', 4),
  imperativeInformal: Word('нагрей', 4),
  imperativeFormal: Word('нагрейте', 4),
  imperfect: [],
};

perfectVerbs.set(нагреть.name.text, нагреть);

export { нагреть };