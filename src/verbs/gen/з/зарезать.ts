import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарезать: PerfectVerb = {
  name: Word('зарезать', 5),
  singular1stPerson: Word('зарезаю', 5),
  singular2ndPerson: Word('зарезаешь', 5),
  singular3rdPerson: Word('зарезает', 5),
  plural1stPerson: Word('зарезаем', 5),
  plural2ndPerson: Word('зарезаете', 5),
  plural3rdPerson: Word('зарезают', 5),
  masculinePast: Word('зарезал', 5),
  femininePast: Word('зарезала', 5),
  neuterPast: Word('зарезало', 5),
  pluralPast: Word('зарезали', 5),
  imperativeInformal: Word('зарезай', 5),
  imperativeFormal: Word('зарезайте', 5),
  imperfect: [],
};

perfectVerbs.set(зарезать.name.text, зарезать);

export { зарезать };