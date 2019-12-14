import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оригинальничать: PerfectVerb = {
  name: Word('оригинальничать', 6),
  singular1stPerson: Word('оригинальничаю', 6),
  singular2ndPerson: Word('оригинальничаешь', 6),
  singular3rdPerson: Word('оригинальничает', 6),
  plural1stPerson: Word('оригинальничаем', 6),
  plural2ndPerson: Word('оригинальничаете', 6),
  plural3rdPerson: Word('оригинальничают', 6),
  masculinePast: Word('оригинальничал', 6),
  femininePast: Word('оригинальничала', 6),
  neuterPast: Word('оригинальничало', 6),
  pluralPast: Word('оригинальничали', 6),
  imperativeInformal: Word('оригинальничай', 6),
  imperativeFormal: Word('оригинальничайте', 6),
  imperfect: [],
};

perfectVerbs.set(оригинальничать.name.text, оригинальничать);

export { оригинальничать };