import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжинать: PerfectVerb = {
  name: Word('выжинать', 5),
  singular1stPerson: Word('выжинаю', 5),
  singular2ndPerson: Word('выжинаешь', 5),
  singular3rdPerson: Word('выжинает', 5),
  plural1stPerson: Word('выжинаем', 5),
  plural2ndPerson: Word('выжинаете', 5),
  plural3rdPerson: Word('выжинают', 5),
  masculinePast: Word('выжинал', 5),
  femininePast: Word('выжинала', 5),
  neuterPast: Word('выжинало', 5),
  pluralPast: Word('выжинали', 5),
  imperativeInformal: Word('выжинай', 5),
  imperativeFormal: Word('выжинайте', 5),
  imperfect: [],
};

perfectVerbs.set(выжинать.name.text, выжинать);

export { выжинать };