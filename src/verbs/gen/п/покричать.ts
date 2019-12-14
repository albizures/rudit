import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покричать: PerfectVerb = {
  name: Word('покричать', 6),
  singular1stPerson: Word('покричу', 6),
  singular2ndPerson: Word('покричишь', 6),
  singular3rdPerson: Word('покричит', 6),
  plural1stPerson: Word('покричим', 6),
  plural2ndPerson: Word('покричите', 6),
  plural3rdPerson: Word('покричат', 6),
  masculinePast: Word('покричал', 6),
  femininePast: Word('покричала', 6),
  neuterPast: Word('покричало', 6),
  pluralPast: Word('покричали', 6),
  imperativeInformal: Word('покричи', 6),
  imperativeFormal: Word('покричите', 6),
  imperfect: [],
};

perfectVerbs.set(покричать.name.text, покричать);

export { покричать };