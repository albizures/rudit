import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покашливать: PerfectVerb = {
  name: Word('покашливать', 3),
  singular1stPerson: Word('покашливаю', 3),
  singular2ndPerson: Word('покашливаешь', 3),
  singular3rdPerson: Word('покашливает', 3),
  plural1stPerson: Word('покашливаем', 3),
  plural2ndPerson: Word('покашливаете', 3),
  plural3rdPerson: Word('покашливают', 3),
  masculinePast: Word('покашливал', 3),
  femininePast: Word('покашливала', 3),
  neuterPast: Word('покашливало', 3),
  pluralPast: Word('покашливали', 3),
  imperativeInformal: Word('покашливай', 3),
  imperativeFormal: Word('покашливайте', 3),
  imperfect: [],
};

perfectVerbs.set(покашливать.name.text, покашливать);

export { покашливать };