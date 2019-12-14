import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слесарничать: PerfectVerb = {
  name: Word('слесарничать', 4),
  singular1stPerson: Word('слесарничаю', 4),
  singular2ndPerson: Word('слесарничаешь', 4),
  singular3rdPerson: Word('слесарничает', 4),
  plural1stPerson: Word('слесарничаем', 4),
  plural2ndPerson: Word('слесарничаете', 4),
  plural3rdPerson: Word('слесарничают', 4),
  masculinePast: Word('слесарничал', 4),
  femininePast: Word('слесарничала', 4),
  neuterPast: Word('слесарничало', 4),
  pluralPast: Word('слесарничали', 4),
  imperativeInformal: Word('слесарничай', 4),
  imperativeFormal: Word('слесарничайте', 4),
  imperfect: [],
};

perfectVerbs.set(слесарничать.name.text, слесарничать);

export { слесарничать };