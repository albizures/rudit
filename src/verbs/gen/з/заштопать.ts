import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заштопать: PerfectVerb = {
  name: Word('заштопать', 4),
  singular1stPerson: Word('заштопаю', 4),
  singular2ndPerson: Word('заштопаешь', 4),
  singular3rdPerson: Word('заштопает', 4),
  plural1stPerson: Word('заштопаем', 4),
  plural2ndPerson: Word('заштопаете', 4),
  plural3rdPerson: Word('заштопают', 4),
  masculinePast: Word('заштопал', 4),
  femininePast: Word('заштопала', 4),
  neuterPast: Word('заштопало', 4),
  pluralPast: Word('заштопали', 4),
  imperativeInformal: Word('заштопай', 4),
  imperativeFormal: Word('заштопайте', 4),
  imperfect: [],
};

perfectVerbs.set(заштопать.name.text, заштопать);

export { заштопать };