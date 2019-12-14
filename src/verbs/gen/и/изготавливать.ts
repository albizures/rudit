import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изготавливать: PerfectVerb = {
  name: Word('изготавливать', 5),
  singular1stPerson: Word('изготавливаю', 5),
  singular2ndPerson: Word('изготавливаешь', 5),
  singular3rdPerson: Word('изготавливает', 5),
  plural1stPerson: Word('изготавливаем', 5),
  plural2ndPerson: Word('изготавливаете', 5),
  plural3rdPerson: Word('изготавливают', 5),
  masculinePast: Word('изготавливал', 5),
  femininePast: Word('изготавливала', 5),
  neuterPast: Word('изготавливало', 5),
  pluralPast: Word('изготавливали', 5),
  imperativeInformal: Word('изготавливай', 5),
  imperativeFormal: Word('изготавливайте', 5),
  imperfect: [],
};

perfectVerbs.set(изготавливать.name.text, изготавливать);

export { изготавливать };