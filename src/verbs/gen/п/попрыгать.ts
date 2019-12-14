import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрыгать: PerfectVerb = {
  name: Word('попрыгать', 4),
  singular1stPerson: Word('попрыгаю', 4),
  singular2ndPerson: Word('попрыгаешь', 4),
  singular3rdPerson: Word('попрыгает', 4),
  plural1stPerson: Word('попрыгаем', 4),
  plural2ndPerson: Word('попрыгаете', 4),
  plural3rdPerson: Word('попрыгают', 4),
  masculinePast: Word('попрыгал', 4),
  femininePast: Word('попрыгала', 4),
  neuterPast: Word('попрыгало', 4),
  pluralPast: Word('попрыгали', 4),
  imperativeInformal: Word('попрыгай', 4),
  imperativeFormal: Word('попрыгайте', 4),
  imperfect: ['прыгать'],
};

perfectVerbs.set(попрыгать.name.text, попрыгать);

export { попрыгать };