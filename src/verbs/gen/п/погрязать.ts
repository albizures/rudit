import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрязать: PerfectVerb = {
  name: Word('погрязать', 6),
  singular1stPerson: Word('погрязаю', 6),
  singular2ndPerson: Word('погрязаешь', 6),
  singular3rdPerson: Word('погрязает', 6),
  plural1stPerson: Word('погрязаем', 6),
  plural2ndPerson: Word('погрязаете', 6),
  plural3rdPerson: Word('погрязают', 6),
  masculinePast: Word('погрязал', 6),
  femininePast: Word('погрязала', 6),
  neuterPast: Word('погрязало', 6),
  pluralPast: Word('погрязали', 6),
  imperativeInformal: Word('погрязай', 6),
  imperativeFormal: Word('погрязайте', 6),
  imperfect: [],
};

perfectVerbs.set(погрязать.name.text, погрязать);

export { погрязать };