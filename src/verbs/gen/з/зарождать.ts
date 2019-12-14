import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарождать: PerfectVerb = {
  name: Word('зарождать', 6),
  singular1stPerson: Word('зарождаю', 6),
  singular2ndPerson: Word('зарождаешь', 6),
  singular3rdPerson: Word('зарождает', 6),
  plural1stPerson: Word('зарождаем', 6),
  plural2ndPerson: Word('зарождаете', 6),
  plural3rdPerson: Word('зарождают', 6),
  masculinePast: Word('зарождал', 6),
  femininePast: Word('зарождала', 6),
  neuterPast: Word('зарождало', 6),
  pluralPast: Word('зарождали', 6),
  imperativeInformal: Word('зарождай', 6),
  imperativeFormal: Word('зарождайте', 6),
  imperfect: [],
};

perfectVerbs.set(зарождать.name.text, зарождать);

export { зарождать };