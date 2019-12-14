import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откашливать: PerfectVerb = {
  name: Word('откашливать', 3),
  singular1stPerson: Word('откашливаю', 3),
  singular2ndPerson: Word('откашливаешь', 3),
  singular3rdPerson: Word('откашливает', 3),
  plural1stPerson: Word('откашливаем', 3),
  plural2ndPerson: Word('откашливаете', 3),
  plural3rdPerson: Word('откашливают', 3),
  masculinePast: Word('откашливал', 3),
  femininePast: Word('откашливала', 3),
  neuterPast: Word('откашливало', 3),
  pluralPast: Word('откашливали', 3),
  imperativeInformal: Word('откашливай', 3),
  imperativeFormal: Word('откашливайте', 3),
  imperfect: [],
};

perfectVerbs.set(откашливать.name.text, откашливать);

export { откашливать };