import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробуждать: PerfectVerb = {
  name: Word('пробуждать', 7),
  singular1stPerson: Word('пробуждаю', 7),
  singular2ndPerson: Word('пробуждаешь', 7),
  singular3rdPerson: Word('пробуждает', 7),
  plural1stPerson: Word('пробуждаем', 7),
  plural2ndPerson: Word('пробуждаете', 7),
  plural3rdPerson: Word('пробуждают', 7),
  masculinePast: Word('пробуждал', 7),
  femininePast: Word('пробуждала', 7),
  neuterPast: Word('пробуждало', 7),
  pluralPast: Word('пробуждали', 7),
  imperativeInformal: Word('пробуждай', 7),
  imperativeFormal: Word('пробуждайте', 7),
  imperfect: ['пробудить'],
};

perfectVerbs.set(пробуждать.name.text, пробуждать);

export { пробуждать };