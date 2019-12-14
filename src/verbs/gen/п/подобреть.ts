import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подобреть: PerfectVerb = {
  name: Word('подобреть', 6),
  singular1stPerson: Word('подобрею', 6),
  singular2ndPerson: Word('подобреешь', 6),
  singular3rdPerson: Word('подобреет', 6),
  plural1stPerson: Word('подобреем', 6),
  plural2ndPerson: Word('подобреете', 6),
  plural3rdPerson: Word('подобреют', 6),
  masculinePast: Word('подобрел', 6),
  femininePast: Word('подобрела', 6),
  neuterPast: Word('подобрело', 6),
  pluralPast: Word('подобрели', 6),
  imperativeInformal: Word('подобрей', 6),
  imperativeFormal: Word('подобрейте', 6),
  imperfect: [],
};

perfectVerbs.set(подобреть.name.text, подобреть);

export { подобреть };