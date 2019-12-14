import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкупать: PerfectVerb = {
  name: Word('выкупать', 5),
  singular1stPerson: Word('выкупаю', 5),
  singular2ndPerson: Word('выкупаешь', 5),
  singular3rdPerson: Word('выкупает', 5),
  plural1stPerson: Word('выкупаем', 5),
  plural2ndPerson: Word('выкупаете', 5),
  plural3rdPerson: Word('выкупают', 5),
  masculinePast: Word('выкупал', 5),
  femininePast: Word('выкупала', 5),
  neuterPast: Word('выкупало', 5),
  pluralPast: Word('выкупали', 5),
  imperativeInformal: Word('выкупай', 5),
  imperativeFormal: Word('выкупайте', 5),
  imperfect: [],
};

perfectVerbs.set(выкупать.name.text, выкупать);

export { выкупать };