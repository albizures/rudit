import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заседать: PerfectVerb = {
  name: Word('заседать', 5),
  singular1stPerson: Word('заседаю', 5),
  singular2ndPerson: Word('заседаешь', 5),
  singular3rdPerson: Word('заседает', 5),
  plural1stPerson: Word('заседаем', 5),
  plural2ndPerson: Word('заседаете', 5),
  plural3rdPerson: Word('заседают', 5),
  masculinePast: Word('заседал', 5),
  femininePast: Word('заседала', 5),
  neuterPast: Word('заседало', 5),
  pluralPast: Word('заседали', 5),
  imperativeInformal: Word('заседай', 5),
  imperativeFormal: Word('заседайте', 5),
  imperfect: [],
};

perfectVerbs.set(заседать.name.text, заседать);

export { заседать };