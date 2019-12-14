import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заточать: PerfectVerb = {
  name: Word('заточать', 5),
  singular1stPerson: Word('заточаю', 5),
  singular2ndPerson: Word('заточаешь', 5),
  singular3rdPerson: Word('заточает', 5),
  plural1stPerson: Word('заточаем', 5),
  plural2ndPerson: Word('заточаете', 5),
  plural3rdPerson: Word('заточают', 5),
  masculinePast: Word('заточал', 5),
  femininePast: Word('заточала', 5),
  neuterPast: Word('заточало', 5),
  pluralPast: Word('заточали', 5),
  imperativeInformal: Word('заточай', 5),
  imperativeFormal: Word('заточайте', 5),
  imperfect: [],
};

perfectVerbs.set(заточать.name.text, заточать);

export { заточать };