import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домолачивать: PerfectVerb = {
  name: Word('домолачивать', 5),
  singular1stPerson: Word('домолачиваю', 5),
  singular2ndPerson: Word('домолачиваешь', 5),
  singular3rdPerson: Word('домолачивает', 5),
  plural1stPerson: Word('домолачиваем', 5),
  plural2ndPerson: Word('домолачиваете', 5),
  plural3rdPerson: Word('домолачивают', 5),
  masculinePast: Word('домолачивал', 5),
  femininePast: Word('домолачивала', 5),
  neuterPast: Word('домолачивало', 5),
  pluralPast: Word('домолачивали', 5),
  imperativeInformal: Word('домолачивай', 5),
  imperativeFormal: Word('домолачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(домолачивать.name.text, домолачивать);

export { домолачивать };