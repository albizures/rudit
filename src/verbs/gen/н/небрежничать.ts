import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const небрежничать: PerfectVerb = {
  name: Word('небрежничать', 4),
  singular1stPerson: Word('небрежничаю', 4),
  singular2ndPerson: Word('небрежничаешь', 4),
  singular3rdPerson: Word('небрежничает', 4),
  plural1stPerson: Word('небрежничаем', 4),
  plural2ndPerson: Word('небрежничаете', 4),
  plural3rdPerson: Word('небрежничают', 4),
  masculinePast: Word('небрежничал', 4),
  femininePast: Word('небрежничала', 4),
  neuterPast: Word('небрежничало', 4),
  pluralPast: Word('небрежничали', 4),
  imperativeInformal: Word('небрежничай', 4),
  imperativeFormal: Word('небрежничайте', 4),
  imperfect: [],
};

perfectVerbs.set(небрежничать.name.text, небрежничать);

export { небрежничать };