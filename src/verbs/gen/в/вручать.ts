import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вручать: PerfectVerb = {
  name: Word('вручать', 4),
  singular1stPerson: Word('вручаю', 4),
  singular2ndPerson: Word('вручаешь', 4),
  singular3rdPerson: Word('вручает', 4),
  plural1stPerson: Word('вручаем', 4),
  plural2ndPerson: Word('вручаете', 4),
  plural3rdPerson: Word('вручают', 4),
  masculinePast: Word('вручал', 4),
  femininePast: Word('вручала', 4),
  neuterPast: Word('вручало', 4),
  pluralPast: Word('вручали', 4),
  imperativeInformal: Word('вручай', 4),
  imperativeFormal: Word('вручайте', 4),
  imperfect: [],
};

perfectVerbs.set(вручать.name.text, вручать);

export { вручать };