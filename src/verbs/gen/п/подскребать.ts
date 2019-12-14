import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подскребать: PerfectVerb = {
  name: Word('подскребать', 8),
  singular1stPerson: Word('подскребаю', 8),
  singular2ndPerson: Word('подскребаешь', 8),
  singular3rdPerson: Word('подскребает', 8),
  plural1stPerson: Word('подскребаем', 8),
  plural2ndPerson: Word('подскребаете', 8),
  plural3rdPerson: Word('подскребают', 8),
  masculinePast: Word('подскребал', 8),
  femininePast: Word('подскребала', 8),
  neuterPast: Word('подскребало', 8),
  pluralPast: Word('подскребали', 8),
  imperativeInformal: Word('подскребай', 8),
  imperativeFormal: Word('подскребайте', 8),
  imperfect: [],
};

perfectVerbs.set(подскребать.name.text, подскребать);

export { подскребать };