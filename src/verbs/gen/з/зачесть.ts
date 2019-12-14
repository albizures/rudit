import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачесть: PerfectVerb = {
  name: Word('зачесть', 3),
  singular1stPerson: Word('зачту', 4),
  singular2ndPerson: Word('зачтёшь', 4),
  singular3rdPerson: Word('зачтёт', 4),
  plural1stPerson: Word('зачтём', 4),
  plural2ndPerson: Word('зачтёте', 4),
  plural3rdPerson: Word('зачтут', 4),
  masculinePast: Word('зачёл', 3),
  femininePast: Word('зачла', 4),
  neuterPast: Word('зачло', 4),
  pluralPast: Word('зачли', 4),
  imperativeInformal: Word('зачти', 4),
  imperativeFormal: Word('зачтите', 4),
  imperfect: [],
};

perfectVerbs.set(зачесть.name.text, зачесть);

export { зачесть };