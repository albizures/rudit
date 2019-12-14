import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увядать: PerfectVerb = {
  name: Word('увядать', 4),
  singular1stPerson: Word('увядаю', 4),
  singular2ndPerson: Word('увядаешь', 4),
  singular3rdPerson: Word('увядает', 4),
  plural1stPerson: Word('увядаем', 4),
  plural2ndPerson: Word('увядаете', 4),
  plural3rdPerson: Word('увядают', 4),
  masculinePast: Word('увядал', 4),
  femininePast: Word('увядала', 4),
  neuterPast: Word('увядало', 4),
  pluralPast: Word('увядали', 4),
  imperativeInformal: Word('увядай', 4),
  imperativeFormal: Word('увядайте', 4),
  imperfect: [],
};

perfectVerbs.set(увядать.name.text, увядать);

export { увядать };