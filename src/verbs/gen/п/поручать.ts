import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поручать: PerfectVerb = {
  name: Word('поручать', 5),
  singular1stPerson: Word('поручаю', 5),
  singular2ndPerson: Word('поручаешь', 5),
  singular3rdPerson: Word('поручает', 5),
  plural1stPerson: Word('поручаем', 5),
  plural2ndPerson: Word('поручаете', 5),
  plural3rdPerson: Word('поручают', 5),
  masculinePast: Word('поручал', 5),
  femininePast: Word('поручала', 5),
  neuterPast: Word('поручало', 5),
  pluralPast: Word('поручали', 5),
  imperativeInformal: Word('поручай', 5),
  imperativeFormal: Word('поручайте', 5),
  imperfect: [],
};

perfectVerbs.set(поручать.name.text, поручать);

export { поручать };