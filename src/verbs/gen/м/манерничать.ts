import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const манерничать: PerfectVerb = {
  name: Word('манерничать', 3),
  singular1stPerson: Word('манерничаю', 3),
  singular2ndPerson: Word('манерничаешь', 3),
  singular3rdPerson: Word('манерничает', 3),
  plural1stPerson: Word('манерничаем', 3),
  plural2ndPerson: Word('манерничаете', 3),
  plural3rdPerson: Word('манерничают', 3),
  masculinePast: Word('манерничал', 3),
  femininePast: Word('манерничала', 3),
  neuterPast: Word('манерничало', 3),
  pluralPast: Word('манерничали', 3),
  imperativeInformal: Word('манерничай', 3),
  imperativeFormal: Word('манерничайте', 3),
  imperfect: [],
};

perfectVerbs.set(манерничать.name.text, манерничать);

export { манерничать };