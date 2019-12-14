import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттаскать: PerfectVerb = {
  name: Word('оттаскать', 6),
  singular1stPerson: Word('оттаскаю', 6),
  singular2ndPerson: Word('оттаскаешь', 6),
  singular3rdPerson: Word('оттаскает', 6),
  plural1stPerson: Word('оттаскаем', 6),
  plural2ndPerson: Word('оттаскаете', 6),
  plural3rdPerson: Word('оттаскают', 6),
  masculinePast: Word('оттаскал', 6),
  femininePast: Word('оттаскала', 6),
  neuterPast: Word('оттаскало', 6),
  pluralPast: Word('оттаскали', 6),
  imperativeInformal: Word('оттаскай', 6),
  imperativeFormal: Word('оттаскайте', 6),
  imperfect: [],
};

perfectVerbs.set(оттаскать.name.text, оттаскать);

export { оттаскать };