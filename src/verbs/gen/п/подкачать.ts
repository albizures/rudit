import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкачать: PerfectVerb = {
  name: Word('подкачать', 6),
  singular1stPerson: Word('подкачаю', 6),
  singular2ndPerson: Word('подкачаешь', 6),
  singular3rdPerson: Word('подкачает', 6),
  plural1stPerson: Word('подкачаем', 6),
  plural2ndPerson: Word('подкачаете', 6),
  plural3rdPerson: Word('подкачают', 6),
  masculinePast: Word('подкачал', 6),
  femininePast: Word('подкачала', 6),
  neuterPast: Word('подкачало', 6),
  pluralPast: Word('подкачали', 6),
  imperativeInformal: Word('подкачай', 6),
  imperativeFormal: Word('подкачайте', 6),
  imperfect: [],
};

perfectVerbs.set(подкачать.name.text, подкачать);

export { подкачать };