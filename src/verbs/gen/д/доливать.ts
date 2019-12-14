import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доливать: PerfectVerb = {
  name: Word('доливать', 5),
  singular1stPerson: Word('доливаю', 5),
  singular2ndPerson: Word('доливаешь', 5),
  singular3rdPerson: Word('доливает', 5),
  plural1stPerson: Word('доливаем', 5),
  plural2ndPerson: Word('доливаете', 5),
  plural3rdPerson: Word('доливают', 5),
  masculinePast: Word('доливал', 5),
  femininePast: Word('доливала', 5),
  neuterPast: Word('доливало', 5),
  pluralPast: Word('доливали', 5),
  imperativeInformal: Word('доливай', 5),
  imperativeFormal: Word('доливайте', 5),
  imperfect: [],
};

perfectVerbs.set(доливать.name.text, доливать);

export { доливать };