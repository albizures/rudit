import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхолаживать: PerfectVerb = {
  name: Word('расхолаживать', 6),
  singular1stPerson: Word('расхолаживаю', 6),
  singular2ndPerson: Word('расхолаживаешь', 6),
  singular3rdPerson: Word('расхолаживает', 6),
  plural1stPerson: Word('расхолаживаем', 6),
  plural2ndPerson: Word('расхолаживаете', 6),
  plural3rdPerson: Word('расхолаживают', 6),
  masculinePast: Word('расхолаживал', 6),
  femininePast: Word('расхолаживала', 6),
  neuterPast: Word('расхолаживало', 6),
  pluralPast: Word('расхолаживали', 6),
  imperativeInformal: Word('расхолаживай', 6),
  imperativeFormal: Word('расхолаживайте', 6),
  imperfect: [],
};

perfectVerbs.set(расхолаживать.name.text, расхолаживать);

export { расхолаживать };