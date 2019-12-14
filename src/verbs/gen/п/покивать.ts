import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покивать: PerfectVerb = {
  name: Word('покивать', 5),
  singular1stPerson: Word('покиваю', 5),
  singular2ndPerson: Word('покиваешь', 5),
  singular3rdPerson: Word('покивает', 5),
  plural1stPerson: Word('покиваем', 5),
  plural2ndPerson: Word('покиваете', 5),
  plural3rdPerson: Word('покивают', 5),
  masculinePast: Word('покивал', 5),
  femininePast: Word('покивала', 5),
  neuterPast: Word('покивало', 5),
  pluralPast: Word('покивали', 5),
  imperativeInformal: Word('покивай', 5),
  imperativeFormal: Word('покивайте', 5),
  imperfect: [],
};

perfectVerbs.set(покивать.name.text, покивать);

export { покивать };