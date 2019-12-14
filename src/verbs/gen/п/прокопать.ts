import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокопать: PerfectVerb = {
  name: Word('прокопать', 6),
  singular1stPerson: Word('прокопаю', 6),
  singular2ndPerson: Word('прокопаешь', 6),
  singular3rdPerson: Word('прокопает', 6),
  plural1stPerson: Word('прокопаем', 6),
  plural2ndPerson: Word('прокопаете', 6),
  plural3rdPerson: Word('прокопают', 6),
  masculinePast: Word('прокопал', 6),
  femininePast: Word('прокопала', 6),
  neuterPast: Word('прокопало', 6),
  pluralPast: Word('прокопали', 6),
  imperativeInformal: Word('прокопай', 6),
  imperativeFormal: Word('прокопайте', 6),
  imperfect: [],
};

perfectVerbs.set(прокопать.name.text, прокопать);

export { прокопать };