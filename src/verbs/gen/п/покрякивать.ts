import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрякивать: PerfectVerb = {
  name: Word('покрякивать', 4),
  singular1stPerson: Word('покрякиваю', 4),
  singular2ndPerson: Word('покрякиваешь', 4),
  singular3rdPerson: Word('покрякивает', 4),
  plural1stPerson: Word('покрякиваем', 4),
  plural2ndPerson: Word('покрякиваете', 4),
  plural3rdPerson: Word('покрякивают', 4),
  masculinePast: Word('покрякивал', 4),
  femininePast: Word('покрякивала', 4),
  neuterPast: Word('покрякивало', 4),
  pluralPast: Word('покрякивали', 4),
  imperativeInformal: Word('покрякивай', 4),
  imperativeFormal: Word('покрякивайте', 4),
  imperfect: [],
};

perfectVerbs.set(покрякивать.name.text, покрякивать);

export { покрякивать };