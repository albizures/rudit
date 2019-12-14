import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлавливать: PerfectVerb = {
  name: Word('отлавливать', 3),
  singular1stPerson: Word('отлавливаю', 3),
  singular2ndPerson: Word('отлавливаешь', 3),
  singular3rdPerson: Word('отлавливает', 3),
  plural1stPerson: Word('отлавливаем', 3),
  plural2ndPerson: Word('отлавливаете', 3),
  plural3rdPerson: Word('отлавливают', 3),
  masculinePast: Word('отлавливал', 3),
  femininePast: Word('отлавливала', 3),
  neuterPast: Word('отлавливало', 3),
  pluralPast: Word('отлавливали', 3),
  imperativeInformal: Word('отлавливай', 3),
  imperativeFormal: Word('отлавливайте', 3),
  imperfect: [],
};

perfectVerbs.set(отлавливать.name.text, отлавливать);

export { отлавливать };