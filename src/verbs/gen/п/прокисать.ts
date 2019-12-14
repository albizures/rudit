import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокисать: PerfectVerb = {
  name: Word('прокисать', 6),
  singular1stPerson: Word('прокисаю', 6),
  singular2ndPerson: Word('прокисаешь', 6),
  singular3rdPerson: Word('прокисает', 6),
  plural1stPerson: Word('прокисаем', 6),
  plural2ndPerson: Word('прокисаете', 6),
  plural3rdPerson: Word('прокисают', 6),
  masculinePast: Word('прокисал', 6),
  femininePast: Word('прокисала', 6),
  neuterPast: Word('прокисало', 6),
  pluralPast: Word('прокисали', 6),
  imperativeInformal: Word('прокисай', 6),
  imperativeFormal: Word('прокисайте', 6),
  imperfect: [],
};

perfectVerbs.set(прокисать.name.text, прокисать);

export { прокисать };