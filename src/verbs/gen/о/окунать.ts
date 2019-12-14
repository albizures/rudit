import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окунать: PerfectVerb = {
  name: Word('окунать', 4),
  singular1stPerson: Word('окунаю', 4),
  singular2ndPerson: Word('окунаешь', 4),
  singular3rdPerson: Word('окунает', 4),
  plural1stPerson: Word('окунаем', 4),
  plural2ndPerson: Word('окунаете', 4),
  plural3rdPerson: Word('окунают', 4),
  masculinePast: Word('окунал', 4),
  femininePast: Word('окунала', 4),
  neuterPast: Word('окунало', 4),
  pluralPast: Word('окунали', 4),
  imperativeInformal: Word('окунай', 4),
  imperativeFormal: Word('окунайте', 4),
  imperfect: [],
};

perfectVerbs.set(окунать.name.text, окунать);

export { окунать };