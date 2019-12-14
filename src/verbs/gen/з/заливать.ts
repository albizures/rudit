import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заливать: PerfectVerb = {
  name: Word('заливать', 5),
  singular1stPerson: Word('заливаю', 5),
  singular2ndPerson: Word('заливаешь', 5),
  singular3rdPerson: Word('заливает', 5),
  plural1stPerson: Word('заливаем', 5),
  plural2ndPerson: Word('заливаете', 5),
  plural3rdPerson: Word('заливают', 5),
  masculinePast: Word('заливал', 5),
  femininePast: Word('заливала', 5),
  neuterPast: Word('заливало', 5),
  pluralPast: Word('заливали', 5),
  imperativeInformal: Word('заливай', 5),
  imperativeFormal: Word('заливайте', 5),
  imperfect: [],
};

perfectVerbs.set(заливать.name.text, заливать);

export { заливать };