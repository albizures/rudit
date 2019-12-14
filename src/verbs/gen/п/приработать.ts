import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приработать: PerfectVerb = {
  name: Word('приработать', 6),
  singular1stPerson: Word('приработаю', 6),
  singular2ndPerson: Word('приработаешь', 6),
  singular3rdPerson: Word('приработает', 6),
  plural1stPerson: Word('приработаем', 6),
  plural2ndPerson: Word('приработаете', 6),
  plural3rdPerson: Word('приработают', 6),
  masculinePast: Word('приработал', 6),
  femininePast: Word('приработала', 6),
  neuterPast: Word('приработало', 6),
  pluralPast: Word('приработали', 6),
  imperativeInformal: Word('приработай', 6),
  imperativeFormal: Word('приработайте', 6),
  imperfect: [],
};

perfectVerbs.set(приработать.name.text, приработать);

export { приработать };