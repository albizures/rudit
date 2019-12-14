import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домешивать: PerfectVerb = {
  name: Word('домешивать', 3),
  singular1stPerson: Word('домешиваю', 3),
  singular2ndPerson: Word('домешиваешь', 3),
  singular3rdPerson: Word('домешивает', 3),
  plural1stPerson: Word('домешиваем', 3),
  plural2ndPerson: Word('домешиваете', 3),
  plural3rdPerson: Word('домешивают', 3),
  masculinePast: Word('домешивал', 3),
  femininePast: Word('домешивала', 3),
  neuterPast: Word('домешивало', 3),
  pluralPast: Word('домешивали', 3),
  imperativeInformal: Word('домешивай', 3),
  imperativeFormal: Word('домешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(домешивать.name.text, домешивать);

export { домешивать };