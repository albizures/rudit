import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заваливать: PerfectVerb = {
  name: Word('заваливать', 3),
  singular1stPerson: Word('заваливаю', 3),
  singular2ndPerson: Word('заваливаешь', 3),
  singular3rdPerson: Word('заваливает', 3),
  plural1stPerson: Word('заваливаем', 3),
  plural2ndPerson: Word('заваливаете', 3),
  plural3rdPerson: Word('заваливают', 3),
  masculinePast: Word('заваливал', 3),
  femininePast: Word('заваливала', 3),
  neuterPast: Word('заваливало', 3),
  pluralPast: Word('заваливали', 3),
  imperativeInformal: Word('заваливай', 3),
  imperativeFormal: Word('заваливайте', 3),
  imperfect: [],
};

perfectVerbs.set(заваливать.name.text, заваливать);

export { заваливать };