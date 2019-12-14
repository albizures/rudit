import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашлёпать: PerfectVerb = {
  name: Word('зашлёпать', 4),
  singular1stPerson: Word('зашлёпаю', 4),
  singular2ndPerson: Word('зашлёпаешь', 4),
  singular3rdPerson: Word('зашлёпает', 4),
  plural1stPerson: Word('зашлёпаем', 4),
  plural2ndPerson: Word('зашлёпаете', 4),
  plural3rdPerson: Word('зашлёпают', 4),
  masculinePast: Word('зашлёпал', 4),
  femininePast: Word('зашлёпала', 4),
  neuterPast: Word('зашлёпало', 4),
  pluralPast: Word('зашлёпали', 4),
  imperativeInformal: Word('зашлёпай', 4),
  imperativeFormal: Word('зашлёпайте', 4),
  imperfect: [],
};

perfectVerbs.set(зашлёпать.name.text, зашлёпать);

export { зашлёпать };