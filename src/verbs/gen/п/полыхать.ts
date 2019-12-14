import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полыхать: PerfectVerb = {
  name: Word('полыхать', 5),
  singular1stPerson: Word('полыхаю', 5),
  singular2ndPerson: Word('полыхаешь', 5),
  singular3rdPerson: Word('полыхает', 5),
  plural1stPerson: Word('полыхаем', 5),
  plural2ndPerson: Word('полыхаете', 5),
  plural3rdPerson: Word('полыхают', 5),
  masculinePast: Word('полыхал', 5),
  femininePast: Word('полыхала', 5),
  neuterPast: Word('полыхало', 5),
  pluralPast: Word('полыхали', 5),
  imperativeInformal: Word('полыхай', 5),
  imperativeFormal: Word('полыхайте', 5),
  imperfect: [],
};

perfectVerbs.set(полыхать.name.text, полыхать);

export { полыхать };