import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристреливать: PerfectVerb = {
  name: Word('пристреливать', 6),
  singular1stPerson: Word('пристреливаю', 6),
  singular2ndPerson: Word('пристреливаешь', 6),
  singular3rdPerson: Word('пристреливает', 6),
  plural1stPerson: Word('пристреливаем', 6),
  plural2ndPerson: Word('пристреливаете', 6),
  plural3rdPerson: Word('пристреливают', 6),
  masculinePast: Word('пристреливал', 6),
  femininePast: Word('пристреливала', 6),
  neuterPast: Word('пристреливало', 6),
  pluralPast: Word('пристреливали', 6),
  imperativeInformal: Word('пристреливай', 6),
  imperativeFormal: Word('пристреливайте', 6),
  imperfect: [],
};

perfectVerbs.set(пристреливать.name.text, пристреливать);

export { пристреливать };