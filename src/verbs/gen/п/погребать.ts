import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погребать: PerfectVerb = {
  name: Word('погребать', 6),
  singular1stPerson: Word('погребаю', 6),
  singular2ndPerson: Word('погребаешь', 6),
  singular3rdPerson: Word('погребает', 6),
  plural1stPerson: Word('погребаем', 6),
  plural2ndPerson: Word('погребаете', 6),
  plural3rdPerson: Word('погребают', 6),
  masculinePast: Word('погребал', 6),
  femininePast: Word('погребала', 6),
  neuterPast: Word('погребало', 6),
  pluralPast: Word('погребали', 6),
  imperativeInformal: Word('погребай', 6),
  imperativeFormal: Word('погребайте', 6),
  imperfect: [],
};

perfectVerbs.set(погребать.name.text, погребать);

export { погребать };