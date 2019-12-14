import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нежничать: PerfectVerb = {
  name: Word('нежничать', 1),
  singular1stPerson: Word('нежничаю', 1),
  singular2ndPerson: Word('нежничаешь', 1),
  singular3rdPerson: Word('нежничает', 1),
  plural1stPerson: Word('нежничаем', 1),
  plural2ndPerson: Word('нежничаете', 1),
  plural3rdPerson: Word('нежничают', 1),
  masculinePast: Word('нежничал', 1),
  femininePast: Word('нежничала', 1),
  neuterPast: Word('нежничало', 1),
  pluralPast: Word('нежничали', 1),
  imperativeInformal: Word('нежничай', 1),
  imperativeFormal: Word('нежничайте', 1),
  imperfect: [],
};

perfectVerbs.set(нежничать.name.text, нежничать);

export { нежничать };