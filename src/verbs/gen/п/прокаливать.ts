import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокаливать: PerfectVerb = {
  name: Word('прокаливать', 4),
  singular1stPerson: Word('прокаливаю', 4),
  singular2ndPerson: Word('прокаливаешь', 4),
  singular3rdPerson: Word('прокаливает', 4),
  plural1stPerson: Word('прокаливаем', 4),
  plural2ndPerson: Word('прокаливаете', 4),
  plural3rdPerson: Word('прокаливают', 4),
  masculinePast: Word('прокаливал', 4),
  femininePast: Word('прокаливала', 4),
  neuterPast: Word('прокаливало', 4),
  pluralPast: Word('прокаливали', 4),
  imperativeInformal: Word('прокаливай', 4),
  imperativeFormal: Word('прокаливайте', 4),
  imperfect: [],
};

perfectVerbs.set(прокаливать.name.text, прокаливать);

export { прокаливать };