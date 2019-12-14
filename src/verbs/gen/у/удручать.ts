import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удручать: PerfectVerb = {
  name: Word('удручать', 5),
  singular1stPerson: Word('удручаю', 5),
  singular2ndPerson: Word('удручаешь', 5),
  singular3rdPerson: Word('удручает', 5),
  plural1stPerson: Word('удручаем', 5),
  plural2ndPerson: Word('удручаете', 5),
  plural3rdPerson: Word('удручают', 5),
  masculinePast: Word('удручал', 5),
  femininePast: Word('удручала', 5),
  neuterPast: Word('удручало', 5),
  pluralPast: Word('удручали', 5),
  imperativeInformal: Word('удручай', 5),
  imperativeFormal: Word('удручайте', 5),
  imperfect: [],
};

perfectVerbs.set(удручать.name.text, удручать);

export { удручать };