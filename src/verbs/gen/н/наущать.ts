import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наущать: PerfectVerb = {
  name: Word('наущать', 4),
  singular1stPerson: Word('наущаю', 4),
  singular2ndPerson: Word('наущаешь', 4),
  singular3rdPerson: Word('наущает', 4),
  plural1stPerson: Word('наущаем', 4),
  plural2ndPerson: Word('наущаете', 4),
  plural3rdPerson: Word('наущают', 4),
  masculinePast: Word('наущал', 4),
  femininePast: Word('наущала', 4),
  neuterPast: Word('наущало', 4),
  pluralPast: Word('наущали', 4),
  imperativeInformal: Word('наущай', 4),
  imperativeFormal: Word('наущайте', 4),
  imperfect: [],
};

perfectVerbs.set(наущать.name.text, наущать);

export { наущать };