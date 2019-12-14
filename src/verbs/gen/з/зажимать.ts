import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажимать: PerfectVerb = {
  name: Word('зажимать', 5),
  singular1stPerson: Word('зажимаю', 5),
  singular2ndPerson: Word('зажимаешь', 5),
  singular3rdPerson: Word('зажимает', 5),
  plural1stPerson: Word('зажимаем', 5),
  plural2ndPerson: Word('зажимаете', 5),
  plural3rdPerson: Word('зажимают', 5),
  masculinePast: Word('зажимал', 5),
  femininePast: Word('зажимала', 5),
  neuterPast: Word('зажимало', 5),
  pluralPast: Word('зажимали', 5),
  imperativeInformal: Word('зажимай', 5),
  imperativeFormal: Word('зажимайте', 5),
  imperfect: [],
};

perfectVerbs.set(зажимать.name.text, зажимать);

export { зажимать };