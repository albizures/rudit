import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покарать: PerfectVerb = {
  name: Word('покарать', 5),
  singular1stPerson: Word('покараю', 5),
  singular2ndPerson: Word('покараешь', 5),
  singular3rdPerson: Word('покарает', 5),
  plural1stPerson: Word('покараем', 5),
  plural2ndPerson: Word('покараете', 5),
  plural3rdPerson: Word('покарают', 5),
  masculinePast: Word('покарал', 5),
  femininePast: Word('покарала', 5),
  neuterPast: Word('покарало', 5),
  pluralPast: Word('покарали', 5),
  imperativeInformal: Word('покарай', 5),
  imperativeFormal: Word('покарайте', 5),
  imperfect: [],
};

perfectVerbs.set(покарать.name.text, покарать);

export { покарать };