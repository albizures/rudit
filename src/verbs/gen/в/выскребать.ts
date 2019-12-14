import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выскребать: PerfectVerb = {
  name: Word('выскребать', 7),
  singular1stPerson: Word('выскребаю', 7),
  singular2ndPerson: Word('выскребаешь', 7),
  singular3rdPerson: Word('выскребает', 7),
  plural1stPerson: Word('выскребаем', 7),
  plural2ndPerson: Word('выскребаете', 7),
  plural3rdPerson: Word('выскребают', 7),
  masculinePast: Word('выскребал', 7),
  femininePast: Word('выскребала', 7),
  neuterPast: Word('выскребало', 7),
  pluralPast: Word('выскребали', 7),
  imperativeInformal: Word('выскребай', 7),
  imperativeFormal: Word('выскребайте', 7),
  imperfect: [],
};

perfectVerbs.set(выскребать.name.text, выскребать);

export { выскребать };