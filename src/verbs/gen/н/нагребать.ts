import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагребать: PerfectVerb = {
  name: Word('нагребать', 6),
  singular1stPerson: Word('нагребаю', 6),
  singular2ndPerson: Word('нагребаешь', 6),
  singular3rdPerson: Word('нагребает', 6),
  plural1stPerson: Word('нагребаем', 6),
  plural2ndPerson: Word('нагребаете', 6),
  plural3rdPerson: Word('нагребают', 6),
  masculinePast: Word('нагребал', 6),
  femininePast: Word('нагребала', 6),
  neuterPast: Word('нагребало', 6),
  pluralPast: Word('нагребали', 6),
  imperativeInformal: Word('нагребай', 6),
  imperativeFormal: Word('нагребайте', 6),
  imperfect: [],
};

perfectVerbs.set(нагребать.name.text, нагребать);

export { нагребать };