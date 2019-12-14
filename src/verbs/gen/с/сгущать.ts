import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгущать: PerfectVerb = {
  name: Word('сгущать', 4),
  singular1stPerson: Word('сгущаю', 4),
  singular2ndPerson: Word('сгущаешь', 4),
  singular3rdPerson: Word('сгущает', 4),
  plural1stPerson: Word('сгущаем', 4),
  plural2ndPerson: Word('сгущаете', 4),
  plural3rdPerson: Word('сгущают', 4),
  masculinePast: Word('сгущал', 4),
  femininePast: Word('сгущала', 4),
  neuterPast: Word('сгущало', 4),
  pluralPast: Word('сгущали', 4),
  imperativeInformal: Word('сгущай', 4),
  imperativeFormal: Word('сгущайте', 4),
  imperfect: [],
};

perfectVerbs.set(сгущать.name.text, сгущать);

export { сгущать };