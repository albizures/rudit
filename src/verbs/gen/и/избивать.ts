import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избивать: PerfectVerb = {
  name: Word('избивать', 5),
  singular1stPerson: Word('избиваю', 5),
  singular2ndPerson: Word('избиваешь', 5),
  singular3rdPerson: Word('избивает', 5),
  plural1stPerson: Word('избиваем', 5),
  plural2ndPerson: Word('избиваете', 5),
  plural3rdPerson: Word('избивают', 5),
  masculinePast: Word('избивал', 5),
  femininePast: Word('избивала', 5),
  neuterPast: Word('избивало', 5),
  pluralPast: Word('избивали', 5),
  imperativeInformal: Word('избивай', 5),
  imperativeFormal: Word('избивайте', 5),
  imperfect: [],
};

perfectVerbs.set(избивать.name.text, избивать);

export { избивать };