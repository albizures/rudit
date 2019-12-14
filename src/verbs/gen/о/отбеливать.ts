import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбеливать: PerfectVerb = {
  name: Word('отбеливать', 3),
  singular1stPerson: Word('отбеливаю', 3),
  singular2ndPerson: Word('отбеливаешь', 3),
  singular3rdPerson: Word('отбеливает', 3),
  plural1stPerson: Word('отбеливаем', 3),
  plural2ndPerson: Word('отбеливаете', 3),
  plural3rdPerson: Word('отбеливают', 3),
  masculinePast: Word('отбеливал', 3),
  femininePast: Word('отбеливала', 3),
  neuterPast: Word('отбеливало', 3),
  pluralPast: Word('отбеливали', 3),
  imperativeInformal: Word('отбеливай', 3),
  imperativeFormal: Word('отбеливайте', 3),
  imperfect: [],
};

perfectVerbs.set(отбеливать.name.text, отбеливать);

export { отбеливать };