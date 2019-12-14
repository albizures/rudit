import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слушать: PerfectVerb = {
  name: Word('слушать', 2),
  singular1stPerson: Word('слушаю', 2),
  singular2ndPerson: Word('слушаешь', 2),
  singular3rdPerson: Word('слушает', 2),
  plural1stPerson: Word('слушаем', 2),
  plural2ndPerson: Word('слушаете', 2),
  plural3rdPerson: Word('слушают', 2),
  masculinePast: Word('слушал', 2),
  femininePast: Word('слушала', 2),
  neuterPast: Word('слушало', 2),
  pluralPast: Word('слушали', 2),
  imperativeInformal: Word('слушай', 2),
  imperativeFormal: Word('слушайте', 2),
  imperfect: ['послушать'],
};

perfectVerbs.set(слушать.name.text, слушать);

export { слушать };