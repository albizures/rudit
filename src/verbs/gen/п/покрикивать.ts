import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрикивать: PerfectVerb = {
  name: Word('покрикивать', 4),
  singular1stPerson: Word('покрикиваю', 4),
  singular2ndPerson: Word('покрикиваешь', 4),
  singular3rdPerson: Word('покрикивает', 4),
  plural1stPerson: Word('покрикиваем', 4),
  plural2ndPerson: Word('покрикиваете', 4),
  plural3rdPerson: Word('покрикивают', 4),
  masculinePast: Word('покрикивал', 4),
  femininePast: Word('покрикивала', 4),
  neuterPast: Word('покрикивало', 4),
  pluralPast: Word('покрикивали', 4),
  imperativeInformal: Word('покрикивай', 4),
  imperativeFormal: Word('покрикивайте', 4),
  imperfect: [],
};

perfectVerbs.set(покрикивать.name.text, покрикивать);

export { покрикивать };