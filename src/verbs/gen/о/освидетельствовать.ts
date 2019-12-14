import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освидетельствовать: PerfectVerb = {
  name: Word('освидетельствовать', 5),
  singular1stPerson: Word('освидетельствую', 5),
  singular2ndPerson: Word('освидетельствуешь', 5),
  singular3rdPerson: Word('освидетельствует', 5),
  plural1stPerson: Word('освидетельствуем', 5),
  plural2ndPerson: Word('освидетельствуете', 5),
  plural3rdPerson: Word('освидетельствуют', 5),
  masculinePast: Word('освидетельствовал', 5),
  femininePast: Word('освидетельствовала', 5),
  neuterPast: Word('освидетельствовало', 5),
  pluralPast: Word('освидетельствовали', 5),
  imperativeInformal: Word('освидетельствуй', 5),
  imperativeFormal: Word('освидетельствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(освидетельствовать.name.text, освидетельствовать);

export { освидетельствовать };