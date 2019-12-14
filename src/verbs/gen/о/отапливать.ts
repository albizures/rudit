import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отапливать: PerfectVerb = {
  name: Word('отапливать', 2),
  singular1stPerson: Word('отапливаю', 2),
  singular2ndPerson: Word('отапливаешь', 2),
  singular3rdPerson: Word('отапливает', 2),
  plural1stPerson: Word('отапливаем', 2),
  plural2ndPerson: Word('отапливаете', 2),
  plural3rdPerson: Word('отапливают', 2),
  masculinePast: Word('отапливал', 2),
  femininePast: Word('отапливала', 2),
  neuterPast: Word('отапливало', 2),
  pluralPast: Word('отапливали', 2),
  imperativeInformal: Word('отапливай', 2),
  imperativeFormal: Word('отапливайте', 2),
  imperfect: [],
};

perfectVerbs.set(отапливать.name.text, отапливать);

export { отапливать };