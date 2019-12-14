import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догребать: PerfectVerb = {
  name: Word('догребать', 6),
  singular1stPerson: Word('догребаю', 6),
  singular2ndPerson: Word('догребаешь', 6),
  singular3rdPerson: Word('догребает', 6),
  plural1stPerson: Word('догребаем', 6),
  plural2ndPerson: Word('догребаете', 6),
  plural3rdPerson: Word('догребают', 6),
  masculinePast: Word('догребал', 6),
  femininePast: Word('догребала', 6),
  neuterPast: Word('догребало', 6),
  pluralPast: Word('догребали', 6),
  imperativeInformal: Word('догребай', 6),
  imperativeFormal: Word('догребайте', 6),
  imperfect: [],
};

perfectVerbs.set(догребать.name.text, догребать);

export { догребать };