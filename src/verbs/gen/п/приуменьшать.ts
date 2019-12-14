import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приуменьшать: PerfectVerb = {
  name: Word('приуменьшать', 9),
  singular1stPerson: Word('приуменьшаю', 9),
  singular2ndPerson: Word('приуменьшаешь', 9),
  singular3rdPerson: Word('приуменьшает', 9),
  plural1stPerson: Word('приуменьшаем', 9),
  plural2ndPerson: Word('приуменьшаете', 9),
  plural3rdPerson: Word('приуменьшают', 9),
  masculinePast: Word('приуменьшал', 9),
  femininePast: Word('приуменьшала', 9),
  neuterPast: Word('приуменьшало', 9),
  pluralPast: Word('приуменьшали', 9),
  imperativeInformal: Word('приуменьшай', 9),
  imperativeFormal: Word('приуменьшайте', 9),
  imperfect: [],
};

perfectVerbs.set(приуменьшать.name.text, приуменьшать);

export { приуменьшать };