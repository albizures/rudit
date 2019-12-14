import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарастать: PerfectVerb = {
  name: Word('зарастать', 6),
  singular1stPerson: Word('зарастаю', 6),
  singular2ndPerson: Word('зарастаешь', 6),
  singular3rdPerson: Word('зарастает', 6),
  plural1stPerson: Word('зарастаем', 6),
  plural2ndPerson: Word('зарастаете', 6),
  plural3rdPerson: Word('зарастают', 6),
  masculinePast: Word('зарастал', 6),
  femininePast: Word('зарастала', 6),
  neuterPast: Word('зарастало', 6),
  pluralPast: Word('зарастали', 6),
  imperativeInformal: Word('зарастай', 6),
  imperativeFormal: Word('зарастайте', 6),
  imperfect: [],
};

perfectVerbs.set(зарастать.name.text, зарастать);

export { зарастать };