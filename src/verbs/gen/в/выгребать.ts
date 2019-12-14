import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгребать: PerfectVerb = {
  name: Word('выгребать', 6),
  singular1stPerson: Word('выгребаю', 6),
  singular2ndPerson: Word('выгребаешь', 6),
  singular3rdPerson: Word('выгребает', 6),
  plural1stPerson: Word('выгребаем', 6),
  plural2ndPerson: Word('выгребаете', 6),
  plural3rdPerson: Word('выгребают', 6),
  masculinePast: Word('выгребал', 6),
  femininePast: Word('выгребала', 6),
  neuterPast: Word('выгребало', 6),
  pluralPast: Word('выгребали', 6),
  imperativeInformal: Word('выгребай', 6),
  imperativeFormal: Word('выгребайте', 6),
  imperfect: [],
};

perfectVerbs.set(выгребать.name.text, выгребать);

export { выгребать };