import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выругать: PerfectVerb = {
  name: Word('выругать', 1),
  singular1stPerson: Word('выругаю', 1),
  singular2ndPerson: Word('выругаешь', 1),
  singular3rdPerson: Word('выругает', 1),
  plural1stPerson: Word('выругаем', 1),
  plural2ndPerson: Word('выругаете', 1),
  plural3rdPerson: Word('выругают', 1),
  masculinePast: Word('выругал', 1),
  femininePast: Word('выругала', 1),
  neuterPast: Word('выругало', 1),
  pluralPast: Word('выругали', 1),
  imperativeInformal: Word('выругай', 1),
  imperativeFormal: Word('выругайте', 1),
  imperfect: [],
};

perfectVerbs.set(выругать.name.text, выругать);

export { выругать };