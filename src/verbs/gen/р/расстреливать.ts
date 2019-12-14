import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстреливать: PerfectVerb = {
  name: Word('расстреливать', 6),
  singular1stPerson: Word('расстреливаю', 6),
  singular2ndPerson: Word('расстреливаешь', 6),
  singular3rdPerson: Word('расстреливает', 6),
  plural1stPerson: Word('расстреливаем', 6),
  plural2ndPerson: Word('расстреливаете', 6),
  plural3rdPerson: Word('расстреливают', 6),
  masculinePast: Word('расстреливал', 6),
  femininePast: Word('расстреливала', 6),
  neuterPast: Word('расстреливало', 6),
  pluralPast: Word('расстреливали', 6),
  imperativeInformal: Word('расстреливай', 6),
  imperativeFormal: Word('расстреливайте', 6),
  imperfect: [],
};

perfectVerbs.set(расстреливать.name.text, расстреливать);

export { расстреливать };