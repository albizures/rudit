import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скоморошничать: PerfectVerb = {
  name: Word('скоморошничать', 6),
  singular1stPerson: Word('скоморошничаю', 6),
  singular2ndPerson: Word('скоморошничаешь', 6),
  singular3rdPerson: Word('скоморошничает', 6),
  plural1stPerson: Word('скоморошничаем', 6),
  plural2ndPerson: Word('скоморошничаете', 6),
  plural3rdPerson: Word('скоморошничают', 6),
  masculinePast: Word('скоморошничал', 6),
  femininePast: Word('скоморошничала', 6),
  neuterPast: Word('скоморошничало', 6),
  pluralPast: Word('скоморошничали', 6),
  imperativeInformal: Word('скоморошничай', 6),
  imperativeFormal: Word('скоморошничайте', 6),
  imperfect: [],
};

perfectVerbs.set(скоморошничать.name.text, скоморошничать);

export { скоморошничать };