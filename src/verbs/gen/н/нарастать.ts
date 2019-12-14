import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарастать: PerfectVerb = {
  name: Word('нарастать', 6),
  singular1stPerson: Word('нарастаю', 6),
  singular2ndPerson: Word('нарастаешь', 6),
  singular3rdPerson: Word('нарастает', 6),
  plural1stPerson: Word('нарастаем', 6),
  plural2ndPerson: Word('нарастаете', 6),
  plural3rdPerson: Word('нарастают', 6),
  masculinePast: Word('нарастал', 6),
  femininePast: Word('нарастала', 6),
  neuterPast: Word('нарастало', 6),
  pluralPast: Word('нарастали', 6),
  imperativeInformal: Word('нарастай', 6),
  imperativeFormal: Word('нарастайте', 6),
  imperfect: [],
};

perfectVerbs.set(нарастать.name.text, нарастать);

export { нарастать };