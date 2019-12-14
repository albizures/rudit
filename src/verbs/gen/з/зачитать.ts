import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачитать: PerfectVerb = {
  name: Word('зачитать', 5),
  singular1stPerson: Word('зачитаю', 5),
  singular2ndPerson: Word('зачитаешь', 5),
  singular3rdPerson: Word('зачитает', 5),
  plural1stPerson: Word('зачитаем', 5),
  plural2ndPerson: Word('зачитаете', 5),
  plural3rdPerson: Word('зачитают', 5),
  masculinePast: Word('зачитал', 5),
  femininePast: Word('зачитала', 5),
  neuterPast: Word('зачитало', 5),
  pluralPast: Word('зачитали', 5),
  imperativeInformal: Word('зачитай', 5),
  imperativeFormal: Word('зачитайте', 5),
  imperfect: [],
};

perfectVerbs.set(зачитать.name.text, зачитать);

export { зачитать };