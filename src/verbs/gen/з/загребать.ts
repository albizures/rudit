import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загребать: PerfectVerb = {
  name: Word('загребать', 6),
  singular1stPerson: Word('загребаю', 6),
  singular2ndPerson: Word('загребаешь', 6),
  singular3rdPerson: Word('загребает', 6),
  plural1stPerson: Word('загребаем', 6),
  plural2ndPerson: Word('загребаете', 6),
  plural3rdPerson: Word('загребают', 6),
  masculinePast: Word('загребал', 6),
  femininePast: Word('загребала', 6),
  neuterPast: Word('загребало', 6),
  pluralPast: Word('загребали', 6),
  imperativeInformal: Word('загребай', 6),
  imperativeFormal: Word('загребайте', 6),
  imperfect: [],
};

perfectVerbs.set(загребать.name.text, загребать);

export { загребать };