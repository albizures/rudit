import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коротать: PerfectVerb = {
  name: Word('коротать', 5),
  singular1stPerson: Word('коротаю', 5),
  singular2ndPerson: Word('коротаешь', 5),
  singular3rdPerson: Word('коротает', 5),
  plural1stPerson: Word('коротаем', 5),
  plural2ndPerson: Word('коротаете', 5),
  plural3rdPerson: Word('коротают', 5),
  masculinePast: Word('коротал', 5),
  femininePast: Word('коротала', 5),
  neuterPast: Word('коротало', 5),
  pluralPast: Word('коротали', 5),
  imperativeInformal: Word('коротай', 5),
  imperativeFormal: Word('коротайте', 5),
  imperfect: [],
};

perfectVerbs.set(коротать.name.text, коротать);

export { коротать };