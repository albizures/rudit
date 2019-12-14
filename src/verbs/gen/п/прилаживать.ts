import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилаживать: PerfectVerb = {
  name: Word('прилаживать', 4),
  singular1stPerson: Word('прилаживаю', 4),
  singular2ndPerson: Word('прилаживаешь', 4),
  singular3rdPerson: Word('прилаживает', 4),
  plural1stPerson: Word('прилаживаем', 4),
  plural2ndPerson: Word('прилаживаете', 4),
  plural3rdPerson: Word('прилаживают', 4),
  masculinePast: Word('прилаживал', 4),
  femininePast: Word('прилаживала', 4),
  neuterPast: Word('прилаживало', 4),
  pluralPast: Word('прилаживали', 4),
  imperativeInformal: Word('прилаживай', 4),
  imperativeFormal: Word('прилаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(прилаживать.name.text, прилаживать);

export { прилаживать };