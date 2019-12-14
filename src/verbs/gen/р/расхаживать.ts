import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхаживать: PerfectVerb = {
  name: Word('расхаживать', 4),
  singular1stPerson: Word('расхаживаю', 4),
  singular2ndPerson: Word('расхаживаешь', 4),
  singular3rdPerson: Word('расхаживает', 4),
  plural1stPerson: Word('расхаживаем', 4),
  plural2ndPerson: Word('расхаживаете', 4),
  plural3rdPerson: Word('расхаживают', 4),
  masculinePast: Word('расхаживал', 4),
  femininePast: Word('расхаживала', 4),
  neuterPast: Word('расхаживало', 4),
  pluralPast: Word('расхаживали', 4),
  imperativeInformal: Word('расхаживай', 4),
  imperativeFormal: Word('расхаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(расхаживать.name.text, расхаживать);

export { расхаживать };