import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбрасывать: PerfectVerb = {
  name: Word('отбрасывать', 4),
  singular1stPerson: Word('отбрасываю', 4),
  singular2ndPerson: Word('отбрасываешь', 4),
  singular3rdPerson: Word('отбрасывает', 4),
  plural1stPerson: Word('отбрасываем', 4),
  plural2ndPerson: Word('отбрасываете', 4),
  plural3rdPerson: Word('отбрасывают', 4),
  masculinePast: Word('отбрасывал', 4),
  femininePast: Word('отбрасывала', 4),
  neuterPast: Word('отбрасывало', 4),
  pluralPast: Word('отбрасывали', 4),
  imperativeInformal: Word('отбрасывай', 4),
  imperativeFormal: Word('отбрасывайте', 4),
  imperfect: [],
};

perfectVerbs.set(отбрасывать.name.text, отбрасывать);

export { отбрасывать };