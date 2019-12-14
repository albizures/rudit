import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накаливать: PerfectVerb = {
  name: Word('накаливать', 3),
  singular1stPerson: Word('накаливаю', 3),
  singular2ndPerson: Word('накаливаешь', 3),
  singular3rdPerson: Word('накаливает', 3),
  plural1stPerson: Word('накаливаем', 3),
  plural2ndPerson: Word('накаливаете', 3),
  plural3rdPerson: Word('накаливают', 3),
  masculinePast: Word('накаливал', 3),
  femininePast: Word('накаливала', 3),
  neuterPast: Word('накаливало', 3),
  pluralPast: Word('накаливали', 3),
  imperativeInformal: Word('накаливай', 3),
  imperativeFormal: Word('накаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(накаливать.name.text, накаливать);

export { накаливать };