import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пообедать: PerfectVerb = {
  name: Word('пообедать', 4),
  singular1stPerson: Word('пообедаю', 4),
  singular2ndPerson: Word('пообедаешь', 4),
  singular3rdPerson: Word('пообедает', 4),
  plural1stPerson: Word('пообедаем', 4),
  plural2ndPerson: Word('пообедаете', 4),
  plural3rdPerson: Word('пообедают', 4),
  masculinePast: Word('пообедал', 4),
  femininePast: Word('пообедала', 4),
  neuterPast: Word('пообедало', 4),
  pluralPast: Word('пообедали', 4),
  imperativeInformal: Word('пообедай', 4),
  imperativeFormal: Word('пообедайте', 4),
  imperfect: ['обедать'],
};

perfectVerbs.set(пообедать.name.text, пообедать);

export { пообедать };