import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зависать: PerfectVerb = {
  name: Word('зависать', 5),
  singular1stPerson: Word('зависаю', 5),
  singular2ndPerson: Word('зависаешь', 5),
  singular3rdPerson: Word('зависает', 5),
  plural1stPerson: Word('зависаем', 5),
  plural2ndPerson: Word('зависаете', 5),
  plural3rdPerson: Word('зависают', 5),
  masculinePast: Word('зависал', 5),
  femininePast: Word('зависала', 5),
  neuterPast: Word('зависало', 5),
  pluralPast: Word('зависали', 5),
  imperativeInformal: Word('зависай', 5),
  imperativeFormal: Word('зависайте', 5),
  imperfect: [],
};

perfectVerbs.set(зависать.name.text, зависать);

export { зависать };