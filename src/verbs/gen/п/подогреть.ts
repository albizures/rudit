import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подогреть: PerfectVerb = {
  name: Word('подогреть', 6),
  singular1stPerson: Word('подогрею', 6),
  singular2ndPerson: Word('подогреешь', 6),
  singular3rdPerson: Word('подогреет', 6),
  plural1stPerson: Word('подогреем', 6),
  plural2ndPerson: Word('подогреете', 6),
  plural3rdPerson: Word('подогреют', 6),
  masculinePast: Word('подогрел', 6),
  femininePast: Word('подогрела', 6),
  neuterPast: Word('подогрело', 6),
  pluralPast: Word('подогрели', 6),
  imperativeInformal: Word('подогрей', 6),
  imperativeFormal: Word('подогрейте', 6),
  imperfect: [],
};

perfectVerbs.set(подогреть.name.text, подогреть);

export { подогреть };