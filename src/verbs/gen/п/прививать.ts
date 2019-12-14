import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прививать: PerfectVerb = {
  name: Word('прививать', 6),
  singular1stPerson: Word('прививаю', 6),
  singular2ndPerson: Word('прививаешь', 6),
  singular3rdPerson: Word('прививает', 6),
  plural1stPerson: Word('прививаем', 6),
  plural2ndPerson: Word('прививаете', 6),
  plural3rdPerson: Word('прививают', 6),
  masculinePast: Word('прививал', 6),
  femininePast: Word('прививала', 6),
  neuterPast: Word('прививало', 6),
  pluralPast: Word('прививали', 6),
  imperativeInformal: Word('прививай', 6),
  imperativeFormal: Word('прививайте', 6),
  imperfect: [],
};

perfectVerbs.set(прививать.name.text, прививать);

export { прививать };