import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взгреть: PerfectVerb = {
  name: Word('взгреть', 4),
  singular1stPerson: Word('взгрею', 4),
  singular2ndPerson: Word('взгреешь', 4),
  singular3rdPerson: Word('взгреет', 4),
  plural1stPerson: Word('взгреем', 4),
  plural2ndPerson: Word('взгреете', 4),
  plural3rdPerson: Word('взгреют', 4),
  masculinePast: Word('взгрел', 4),
  femininePast: Word('взгрела', 4),
  neuterPast: Word('взгрело', 4),
  pluralPast: Word('взгрели', 4),
  imperativeInformal: Word('взгрей', 4),
  imperativeFormal: Word('взгрейте', 4),
  imperfect: [],
};

perfectVerbs.set(взгреть.name.text, взгреть);

export { взгреть };