import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стаскать: PerfectVerb = {
  name: Word('стаскать', 5),
  singular1stPerson: Word('стаскаю', 5),
  singular2ndPerson: Word('стаскаешь', 5),
  singular3rdPerson: Word('стаскает', 5),
  plural1stPerson: Word('стаскаем', 5),
  plural2ndPerson: Word('стаскаете', 5),
  plural3rdPerson: Word('стаскают', 5),
  masculinePast: Word('стаскал', 5),
  femininePast: Word('стаскала', 5),
  neuterPast: Word('стаскало', 5),
  pluralPast: Word('стаскали', 5),
  imperativeInformal: Word('стаскай', 5),
  imperativeFormal: Word('стаскайте', 5),
  imperfect: [],
};

perfectVerbs.set(стаскать.name.text, стаскать);

export { стаскать };