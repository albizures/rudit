import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашлёпать: PerfectVerb = {
  name: Word('зашлёпать', 1),
  singular1stPerson: Word('зашлёпаю', 1),
  singular2ndPerson: Word('зашлёпаешь', 1),
  singular3rdPerson: Word('зашлёпает', 1),
  plural1stPerson: Word('зашлёпаем', 1),
  plural2ndPerson: Word('зашлёпаете', 1),
  plural3rdPerson: Word('зашлёпают', 1),
  masculinePast: Word('зашлёпал', 1),
  femininePast: Word('зашлёпала', 1),
  neuterPast: Word('зашлёпало', 1),
  pluralPast: Word('зашлёпали', 1),
  imperativeInformal: Word('зашлёпай', 1),
  imperativeFormal: Word('зашлёпайте', 1),
  imperfect: [],
};

perfectVerbs.set(зашлёпать.name.text, зашлёпать);

export { зашлёпать };