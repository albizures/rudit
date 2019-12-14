import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тачать: PerfectVerb = {
  name: Word('тачать', 3),
  singular1stPerson: Word('тачаю', 3),
  singular2ndPerson: Word('тачаешь', 3),
  singular3rdPerson: Word('тачает', 3),
  plural1stPerson: Word('тачаем', 3),
  plural2ndPerson: Word('тачаете', 3),
  plural3rdPerson: Word('тачают', 3),
  masculinePast: Word('тачал', 3),
  femininePast: Word('тачала', 3),
  neuterPast: Word('тачало', 3),
  pluralPast: Word('тачали', 3),
  imperativeInformal: Word('тачай', 3),
  imperativeFormal: Word('тачайте', 3),
  imperfect: [],
};

perfectVerbs.set(тачать.name.text, тачать);

export { тачать };