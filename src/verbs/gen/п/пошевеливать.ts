import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошевеливать: PerfectVerb = {
  name: Word('пошевеливать', 5),
  singular1stPerson: Word('пошевеливаю', 5),
  singular2ndPerson: Word('пошевеливаешь', 5),
  singular3rdPerson: Word('пошевеливает', 5),
  plural1stPerson: Word('пошевеливаем', 5),
  plural2ndPerson: Word('пошевеливаете', 5),
  plural3rdPerson: Word('пошевеливают', 5),
  masculinePast: Word('пошевеливал', 5),
  femininePast: Word('пошевеливала', 5),
  neuterPast: Word('пошевеливало', 5),
  pluralPast: Word('пошевеливали', 5),
  imperativeInformal: Word('пошевеливай', 5),
  imperativeFormal: Word('пошевеливайте', 5),
  imperfect: [],
};

perfectVerbs.set(пошевеливать.name.text, пошевеливать);

export { пошевеливать };