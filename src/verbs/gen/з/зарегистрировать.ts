import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарегистрировать: PerfectVerb = {
  name: Word('зарегистрировать', 9),
  singular1stPerson: Word('зарегистрирую', 9),
  singular2ndPerson: Word('зарегистрируешь', 9),
  singular3rdPerson: Word('зарегистрирует', 9),
  plural1stPerson: Word('зарегистрируем', 9),
  plural2ndPerson: Word('зарегистрируете', 9),
  plural3rdPerson: Word('зарегистрируют', 9),
  masculinePast: Word('зарегистрировал', 9),
  femininePast: Word('зарегистрировала', 9),
  neuterPast: Word('зарегистрировало', 9),
  pluralPast: Word('зарегистрировали', 9),
  imperativeInformal: Word('зарегистрируй', 9),
  imperativeFormal: Word('зарегистрируйте', 9),
  imperfect: [],
};

perfectVerbs.set(зарегистрировать.name.text, зарегистрировать);

export { зарегистрировать };