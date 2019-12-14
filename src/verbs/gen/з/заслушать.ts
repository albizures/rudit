import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслушать: PerfectVerb = {
  name: Word('заслушать', 4),
  singular1stPerson: Word('заслушаю', 4),
  singular2ndPerson: Word('заслушаешь', 4),
  singular3rdPerson: Word('заслушает', 4),
  plural1stPerson: Word('заслушаем', 4),
  plural2ndPerson: Word('заслушаете', 4),
  plural3rdPerson: Word('заслушают', 4),
  masculinePast: Word('заслушал', 4),
  femininePast: Word('заслушала', 4),
  neuterPast: Word('заслушало', 4),
  pluralPast: Word('заслушали', 4),
  imperativeInformal: Word('заслушай', 4),
  imperativeFormal: Word('заслушайте', 4),
  imperfect: [],
};

perfectVerbs.set(заслушать.name.text, заслушать);

export { заслушать };