import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зреть: PerfectVerb = {
  name: Word('зреть', 2),
  singular1stPerson: Word('зрею', 2),
  singular2ndPerson: Word('зреешь', 2),
  singular3rdPerson: Word('зреет', 2),
  plural1stPerson: Word('зреем', 2),
  plural2ndPerson: Word('зреете', 2),
  plural3rdPerson: Word('зреют', 2),
  masculinePast: Word('зрел', 2),
  femininePast: Word('зрела', 2),
  neuterPast: Word('зрело', 2),
  pluralPast: Word('зрели', 2),
  imperativeInformal: Word('зрей', 2),
  imperativeFormal: Word('зрейте', 2),
  imperfect: ['созреть'],
};

perfectVerbs.set(зреть.name.text, зреть);

export { зреть };