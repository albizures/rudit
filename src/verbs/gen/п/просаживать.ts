import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просаживать: PerfectVerb = {
  name: Word('просаживать', 4),
  singular1stPerson: Word('просаживаю', 4),
  singular2ndPerson: Word('просаживаешь', 4),
  singular3rdPerson: Word('просаживает', 4),
  plural1stPerson: Word('просаживаем', 4),
  plural2ndPerson: Word('просаживаете', 4),
  plural3rdPerson: Word('просаживают', 4),
  masculinePast: Word('просаживал', 4),
  femininePast: Word('просаживала', 4),
  neuterPast: Word('просаживало', 4),
  pluralPast: Word('просаживали', 4),
  imperativeInformal: Word('просаживай', 4),
  imperativeFormal: Word('просаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(просаживать.name.text, просаживать);

export { просаживать };