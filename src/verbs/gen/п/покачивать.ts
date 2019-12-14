import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покачивать: PerfectVerb = {
  name: Word('покачивать', 3),
  singular1stPerson: Word('покачиваю', 3),
  singular2ndPerson: Word('покачиваешь', 3),
  singular3rdPerson: Word('покачивает', 3),
  plural1stPerson: Word('покачиваем', 3),
  plural2ndPerson: Word('покачиваете', 3),
  plural3rdPerson: Word('покачивают', 3),
  masculinePast: Word('покачивал', 3),
  femininePast: Word('покачивала', 3),
  neuterPast: Word('покачивало', 3),
  pluralPast: Word('покачивали', 3),
  imperativeInformal: Word('покачивай', 3),
  imperativeFormal: Word('покачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(покачивать.name.text, покачивать);

export { покачивать };