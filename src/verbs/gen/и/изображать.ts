import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изображать: PerfectVerb = {
  name: Word('изображать', 7),
  singular1stPerson: Word('изображаю', 7),
  singular2ndPerson: Word('изображаешь', 7),
  singular3rdPerson: Word('изображает', 7),
  plural1stPerson: Word('изображаем', 7),
  plural2ndPerson: Word('изображаете', 7),
  plural3rdPerson: Word('изображают', 7),
  masculinePast: Word('изображал', 7),
  femininePast: Word('изображала', 7),
  neuterPast: Word('изображало', 7),
  pluralPast: Word('изображали', 7),
  imperativeInformal: Word('изображай', 7),
  imperativeFormal: Word('изображайте', 7),
  imperfect: [],
};

perfectVerbs.set(изображать.name.text, изображать);

export { изображать };