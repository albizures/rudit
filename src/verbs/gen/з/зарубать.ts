import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарубать: PerfectVerb = {
  name: Word('зарубать', 5),
  singular1stPerson: Word('зарубаю', 5),
  singular2ndPerson: Word('зарубаешь', 5),
  singular3rdPerson: Word('зарубает', 5),
  plural1stPerson: Word('зарубаем', 5),
  plural2ndPerson: Word('зарубаете', 5),
  plural3rdPerson: Word('зарубают', 5),
  masculinePast: Word('зарубал', 5),
  femininePast: Word('зарубала', 5),
  neuterPast: Word('зарубало', 5),
  pluralPast: Word('зарубали', 5),
  imperativeInformal: Word('зарубай', 5),
  imperativeFormal: Word('зарубайте', 5),
  imperfect: [],
};

perfectVerbs.set(зарубать.name.text, зарубать);

export { зарубать };