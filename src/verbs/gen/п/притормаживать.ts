import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притормаживать: PerfectVerb = {
  name: Word('притормаживать', 7),
  singular1stPerson: Word('притормаживаю', 7),
  singular2ndPerson: Word('притормаживаешь', 7),
  singular3rdPerson: Word('притормаживает', 7),
  plural1stPerson: Word('притормаживаем', 7),
  plural2ndPerson: Word('притормаживаете', 7),
  plural3rdPerson: Word('притормаживают', 7),
  masculinePast: Word('притормаживал', 7),
  femininePast: Word('притормаживала', 7),
  neuterPast: Word('притормаживало', 7),
  pluralPast: Word('притормаживали', 7),
  imperativeInformal: Word('притормаживай', 7),
  imperativeFormal: Word('притормаживайте', 7),
  imperfect: [],
};

perfectVerbs.set(притормаживать.name.text, притормаживать);

export { притормаживать };