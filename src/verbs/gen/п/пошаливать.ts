import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошаливать: PerfectVerb = {
  name: Word('пошаливать', 3),
  singular1stPerson: Word('пошаливаю', 3),
  singular2ndPerson: Word('пошаливаешь', 3),
  singular3rdPerson: Word('пошаливает', 3),
  plural1stPerson: Word('пошаливаем', 3),
  plural2ndPerson: Word('пошаливаете', 3),
  plural3rdPerson: Word('пошаливают', 3),
  masculinePast: Word('пошаливал', 3),
  femininePast: Word('пошаливала', 3),
  neuterPast: Word('пошаливало', 3),
  pluralPast: Word('пошаливали', 3),
  imperativeInformal: Word('пошаливай', 3),
  imperativeFormal: Word('пошаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(пошаливать.name.text, пошаливать);

export { пошаливать };