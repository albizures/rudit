import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поубивать: PerfectVerb = {
  name: Word('поубивать', 6),
  singular1stPerson: Word('поубиваю', 6),
  singular2ndPerson: Word('поубиваешь', 6),
  singular3rdPerson: Word('поубивает', 6),
  plural1stPerson: Word('поубиваем', 6),
  plural2ndPerson: Word('поубиваете', 6),
  plural3rdPerson: Word('поубивают', 6),
  masculinePast: Word('поубивал', 6),
  femininePast: Word('поубивала', 6),
  neuterPast: Word('поубивало', 6),
  pluralPast: Word('поубивали', 6),
  imperativeInformal: Word('поубивай', 6),
  imperativeFormal: Word('поубивайте', 6),
  imperfect: [],
};

perfectVerbs.set(поубивать.name.text, поубивать);

export { поубивать };