import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усыхать: PerfectVerb = {
  name: Word('усыхать', 4),
  singular1stPerson: Word('усыхаю', 4),
  singular2ndPerson: Word('усыхаешь', 4),
  singular3rdPerson: Word('усыхает', 4),
  plural1stPerson: Word('усыхаем', 4),
  plural2ndPerson: Word('усыхаете', 4),
  plural3rdPerson: Word('усыхают', 4),
  masculinePast: Word('усыхал', 4),
  femininePast: Word('усыхала', 4),
  neuterPast: Word('усыхало', 4),
  pluralPast: Word('усыхали', 4),
  imperativeInformal: Word('усыхай', 4),
  imperativeFormal: Word('усыхайте', 4),
  imperfect: [],
};

perfectVerbs.set(усыхать.name.text, усыхать);

export { усыхать };