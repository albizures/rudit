import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вбрасывать: PerfectVerb = {
  name: Word('вбрасывать', 3),
  singular1stPerson: Word('вбрасываю', 3),
  singular2ndPerson: Word('вбрасываешь', 3),
  singular3rdPerson: Word('вбрасывает', 3),
  plural1stPerson: Word('вбрасываем', 3),
  plural2ndPerson: Word('вбрасываете', 3),
  plural3rdPerson: Word('вбрасывают', 3),
  masculinePast: Word('вбрасывал', 3),
  femininePast: Word('вбрасывала', 3),
  neuterPast: Word('вбрасывало', 3),
  pluralPast: Word('вбрасывали', 3),
  imperativeInformal: Word('вбрасывай', 3),
  imperativeFormal: Word('вбрасывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вбрасывать.name.text, вбрасывать);

export { вбрасывать };