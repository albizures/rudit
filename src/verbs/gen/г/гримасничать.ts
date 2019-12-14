import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гримасничать: PerfectVerb = {
  name: Word('гримасничать', 4),
  singular1stPerson: Word('гримасничаю', 4),
  singular2ndPerson: Word('гримасничаешь', 4),
  singular3rdPerson: Word('гримасничает', 4),
  plural1stPerson: Word('гримасничаем', 4),
  plural2ndPerson: Word('гримасничаете', 4),
  plural3rdPerson: Word('гримасничают', 4),
  masculinePast: Word('гримасничал', 4),
  femininePast: Word('гримасничала', 4),
  neuterPast: Word('гримасничало', 4),
  pluralPast: Word('гримасничали', 4),
  imperativeInformal: Word('гримасничай', 4),
  imperativeFormal: Word('гримасничайте', 4),
  imperfect: [],
};

perfectVerbs.set(гримасничать.name.text, гримасничать);

export { гримасничать };