import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окупать: PerfectVerb = {
  name: Word('окупать', 4),
  singular1stPerson: Word('окупаю', 4),
  singular2ndPerson: Word('окупаешь', 4),
  singular3rdPerson: Word('окупает', 4),
  plural1stPerson: Word('окупаем', 4),
  plural2ndPerson: Word('окупаете', 4),
  plural3rdPerson: Word('окупают', 4),
  masculinePast: Word('окупал', 4),
  femininePast: Word('окупала', 4),
  neuterPast: Word('окупало', 4),
  pluralPast: Word('окупали', 4),
  imperativeInformal: Word('окупай', 4),
  imperativeFormal: Word('окупайте', 4),
  imperfect: [],
};

perfectVerbs.set(окупать.name.text, окупать);

export { окупать };