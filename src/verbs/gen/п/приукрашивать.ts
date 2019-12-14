import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приукрашивать: PerfectVerb = {
  name: Word('приукрашивать', 6),
  singular1stPerson: Word('приукрашиваю', 6),
  singular2ndPerson: Word('приукрашиваешь', 6),
  singular3rdPerson: Word('приукрашивает', 6),
  plural1stPerson: Word('приукрашиваем', 6),
  plural2ndPerson: Word('приукрашиваете', 6),
  plural3rdPerson: Word('приукрашивают', 6),
  masculinePast: Word('приукрашивал', 6),
  femininePast: Word('приукрашивала', 6),
  neuterPast: Word('приукрашивало', 6),
  pluralPast: Word('приукрашивали', 6),
  imperativeInformal: Word('приукрашивай', 6),
  imperativeFormal: Word('приукрашивайте', 6),
  imperfect: [],
};

perfectVerbs.set(приукрашивать.name.text, приукрашивать);

export { приукрашивать };