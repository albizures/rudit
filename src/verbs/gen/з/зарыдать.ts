import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарыдать: PerfectVerb = {
  name: Word('зарыдать', 5),
  singular1stPerson: Word('зарыдаю', 5),
  singular2ndPerson: Word('зарыдаешь', 5),
  singular3rdPerson: Word('зарыдает', 5),
  plural1stPerson: Word('зарыдаем', 5),
  plural2ndPerson: Word('зарыдаете', 5),
  plural3rdPerson: Word('зарыдают', 5),
  masculinePast: Word('зарыдал', 5),
  femininePast: Word('зарыдала', 5),
  neuterPast: Word('зарыдало', 5),
  pluralPast: Word('зарыдали', 5),
  imperativeInformal: Word('зарыдай', 5),
  imperativeFormal: Word('зарыдайте', 5),
  imperfect: [],
};

perfectVerbs.set(зарыдать.name.text, зарыдать);

export { зарыдать };