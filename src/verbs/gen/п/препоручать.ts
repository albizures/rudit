import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const препоручать: PerfectVerb = {
  name: Word('препоручать', 8),
  singular1stPerson: Word('препоручаю', 8),
  singular2ndPerson: Word('препоручаешь', 8),
  singular3rdPerson: Word('препоручает', 8),
  plural1stPerson: Word('препоручаем', 8),
  plural2ndPerson: Word('препоручаете', 8),
  plural3rdPerson: Word('препоручают', 8),
  masculinePast: Word('препоручал', 8),
  femininePast: Word('препоручала', 8),
  neuterPast: Word('препоручало', 8),
  pluralPast: Word('препоручали', 8),
  imperativeInformal: Word('препоручай', 8),
  imperativeFormal: Word('препоручайте', 8),
  imperfect: [],
};

perfectVerbs.set(препоручать.name.text, препоручать);

export { препоручать };