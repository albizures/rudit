import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просиживать: PerfectVerb = {
  name: Word('просиживать', 4),
  singular1stPerson: Word('просиживаю', 4),
  singular2ndPerson: Word('просиживаешь', 4),
  singular3rdPerson: Word('просиживает', 4),
  plural1stPerson: Word('просиживаем', 4),
  plural2ndPerson: Word('просиживаете', 4),
  plural3rdPerson: Word('просиживают', 4),
  masculinePast: Word('просиживал', 4),
  femininePast: Word('просиживала', 4),
  neuterPast: Word('просиживало', 4),
  pluralPast: Word('просиживали', 4),
  imperativeInformal: Word('просиживай', 4),
  imperativeFormal: Word('просиживайте', 4),
  imperfect: [],
};

perfectVerbs.set(просиживать.name.text, просиживать);

export { просиживать };