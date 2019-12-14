import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накапливать: PerfectVerb = {
  name: Word('накапливать', 3),
  singular1stPerson: Word('накапливаю', 3),
  singular2ndPerson: Word('накапливаешь', 3),
  singular3rdPerson: Word('накапливает', 3),
  plural1stPerson: Word('накапливаем', 3),
  plural2ndPerson: Word('накапливаете', 3),
  plural3rdPerson: Word('накапливают', 3),
  masculinePast: Word('накапливал', 3),
  femininePast: Word('накапливала', 3),
  neuterPast: Word('накапливало', 3),
  pluralPast: Word('накапливали', 3),
  imperativeInformal: Word('накапливай', 3),
  imperativeFormal: Word('накапливайте', 3),
  imperfect: [],
};

perfectVerbs.set(накапливать.name.text, накапливать);

export { накапливать };