import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растапливать: PerfectVerb = {
  name: Word('растапливать', 4),
  singular1stPerson: Word('растапливаю', 4),
  singular2ndPerson: Word('растапливаешь', 4),
  singular3rdPerson: Word('растапливает', 4),
  plural1stPerson: Word('растапливаем', 4),
  plural2ndPerson: Word('растапливаете', 4),
  plural3rdPerson: Word('растапливают', 4),
  masculinePast: Word('растапливал', 4),
  femininePast: Word('растапливала', 4),
  neuterPast: Word('растапливало', 4),
  pluralPast: Word('растапливали', 4),
  imperativeInformal: Word('растапливай', 4),
  imperativeFormal: Word('растапливайте', 4),
  imperfect: [],
};

perfectVerbs.set(растапливать.name.text, растапливать);

export { растапливать };