import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облупливать: PerfectVerb = {
  name: Word('облупливать', 3),
  singular1stPerson: Word('облупливаю', 3),
  singular2ndPerson: Word('облупливаешь', 3),
  singular3rdPerson: Word('облупливает', 3),
  plural1stPerson: Word('облупливаем', 3),
  plural2ndPerson: Word('облупливаете', 3),
  plural3rdPerson: Word('облупливают', 3),
  masculinePast: Word('облупливал', 3),
  femininePast: Word('облупливала', 3),
  neuterPast: Word('облупливало', 3),
  pluralPast: Word('облупливали', 3),
  imperativeInformal: Word('облупливай', 3),
  imperativeFormal: Word('облупливайте', 3),
  imperfect: [],
};

perfectVerbs.set(облупливать.name.text, облупливать);

export { облупливать };