import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сиживать: PerfectVerb = {
  name: Word('сиживать', 1),
  singular1stPerson: Word('сиживаю', 1),
  singular2ndPerson: Word('сиживаешь', 1),
  singular3rdPerson: Word('сиживает', 1),
  plural1stPerson: Word('сиживаем', 1),
  plural2ndPerson: Word('сиживаете', 1),
  plural3rdPerson: Word('сиживают', 1),
  masculinePast: Word('сиживал', 1),
  femininePast: Word('сиживала', 1),
  neuterPast: Word('сиживало', 1),
  pluralPast: Word('сиживали', 1),
  imperativeInformal: Word('сиживай', 1),
  imperativeFormal: Word('сиживайте', 1),
  imperfect: [],
};

perfectVerbs.set(сиживать.name.text, сиживать);

export { сиживать };