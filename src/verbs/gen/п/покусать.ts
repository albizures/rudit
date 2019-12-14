import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покусать: PerfectVerb = {
  name: Word('покусать', 5),
  singular1stPerson: Word('покусаю', 5),
  singular2ndPerson: Word('покусаешь', 5),
  singular3rdPerson: Word('покусает', 5),
  plural1stPerson: Word('покусаем', 5),
  plural2ndPerson: Word('покусаете', 5),
  plural3rdPerson: Word('покусают', 5),
  masculinePast: Word('покусал', 5),
  femininePast: Word('покусала', 5),
  neuterPast: Word('покусало', 5),
  pluralPast: Word('покусали', 5),
  imperativeInformal: Word('покусай', 5),
  imperativeFormal: Word('покусайте', 5),
  imperfect: [],
};

perfectVerbs.set(покусать.name.text, покусать);

export { покусать };