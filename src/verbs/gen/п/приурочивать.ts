import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приурочивать: PerfectVerb = {
  name: Word('приурочивать', 5),
  singular1stPerson: Word('приурочиваю', 5),
  singular2ndPerson: Word('приурочиваешь', 5),
  singular3rdPerson: Word('приурочивает', 5),
  plural1stPerson: Word('приурочиваем', 5),
  plural2ndPerson: Word('приурочиваете', 5),
  plural3rdPerson: Word('приурочивают', 5),
  masculinePast: Word('приурочивал', 5),
  femininePast: Word('приурочивала', 5),
  neuterPast: Word('приурочивало', 5),
  pluralPast: Word('приурочивали', 5),
  imperativeInformal: Word('приурочивай', 5),
  imperativeFormal: Word('приурочивайте', 5),
  imperfect: [],
};

perfectVerbs.set(приурочивать.name.text, приурочивать);

export { приурочивать };