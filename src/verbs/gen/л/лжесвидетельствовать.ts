import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лжесвидетельствовать: PerfectVerb = {
  name: Word('лжесвидетельствовать', 7),
  singular1stPerson: Word('лжесвидетельствую', 7),
  singular2ndPerson: Word('лжесвидетельствуешь', 7),
  singular3rdPerson: Word('лжесвидетельствует', 7),
  plural1stPerson: Word('лжесвидетельствуем', 7),
  plural2ndPerson: Word('лжесвидетельствуете', 7),
  plural3rdPerson: Word('лжесвидетельствуют', 7),
  masculinePast: Word('лжесвидетельствовал', 7),
  femininePast: Word('лжесвидетельствовала', 7),
  neuterPast: Word('лжесвидетельствовало', 7),
  pluralPast: Word('лжесвидетельствовали', 7),
  imperativeInformal: Word('лжесвидетельствуй', 7),
  imperativeFormal: Word('лжесвидетельствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(лжесвидетельствовать.name.text, лжесвидетельствовать);

export { лжесвидетельствовать };