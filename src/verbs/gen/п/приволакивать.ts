import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приволакивать: PerfectVerb = {
  name: Word('приволакивать', 6),
  singular1stPerson: Word('приволакиваю', 6),
  singular2ndPerson: Word('приволакиваешь', 6),
  singular3rdPerson: Word('приволакивает', 6),
  plural1stPerson: Word('приволакиваем', 6),
  plural2ndPerson: Word('приволакиваете', 6),
  plural3rdPerson: Word('приволакивают', 6),
  masculinePast: Word('приволакивал', 6),
  femininePast: Word('приволакивала', 6),
  neuterPast: Word('приволакивало', 6),
  pluralPast: Word('приволакивали', 6),
  imperativeInformal: Word('приволакивай', 6),
  imperativeFormal: Word('приволакивайте', 6),
  imperfect: [],
};

perfectVerbs.set(приволакивать.name.text, приволакивать);

export { приволакивать };