import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причаливать: PerfectVerb = {
  name: Word('причаливать', 4),
  singular1stPerson: Word('причаливаю', 4),
  singular2ndPerson: Word('причаливаешь', 4),
  singular3rdPerson: Word('причаливает', 4),
  plural1stPerson: Word('причаливаем', 4),
  plural2ndPerson: Word('причаливаете', 4),
  plural3rdPerson: Word('причаливают', 4),
  masculinePast: Word('причаливал', 4),
  femininePast: Word('причаливала', 4),
  neuterPast: Word('причаливало', 4),
  pluralPast: Word('причаливали', 4),
  imperativeInformal: Word('причаливай', 4),
  imperativeFormal: Word('причаливайте', 4),
  imperfect: [],
};

perfectVerbs.set(причаливать.name.text, причаливать);

export { причаливать };