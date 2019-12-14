import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усаживать: PerfectVerb = {
  name: Word('усаживать', 2),
  singular1stPerson: Word('усаживаю', 2),
  singular2ndPerson: Word('усаживаешь', 2),
  singular3rdPerson: Word('усаживает', 2),
  plural1stPerson: Word('усаживаем', 2),
  plural2ndPerson: Word('усаживаете', 2),
  plural3rdPerson: Word('усаживают', 2),
  masculinePast: Word('усаживал', 2),
  femininePast: Word('усаживала', 2),
  neuterPast: Word('усаживало', 2),
  pluralPast: Word('усаживали', 2),
  imperativeInformal: Word('усаживай', 2),
  imperativeFormal: Word('усаживайте', 2),
  imperfect: [],
};

perfectVerbs.set(усаживать.name.text, усаживать);

export { усаживать };