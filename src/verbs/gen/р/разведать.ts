import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разведать: PerfectVerb = {
  name: Word('разведать', 4),
  singular1stPerson: Word('разведаю', 4),
  singular2ndPerson: Word('разведаешь', 4),
  singular3rdPerson: Word('разведает', 4),
  plural1stPerson: Word('разведаем', 4),
  plural2ndPerson: Word('разведаете', 4),
  plural3rdPerson: Word('разведают', 4),
  masculinePast: Word('разведал', 4),
  femininePast: Word('разведала', 4),
  neuterPast: Word('разведало', 4),
  pluralPast: Word('разведали', 4),
  imperativeInformal: Word('разведай', 4),
  imperativeFormal: Word('разведайте', 4),
  imperfect: [],
};

perfectVerbs.set(разведать.name.text, разведать);

export { разведать };