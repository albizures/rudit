import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забрасывать: PerfectVerb = {
  name: Word('забрасывать', 4),
  singular1stPerson: Word('забрасываю', 4),
  singular2ndPerson: Word('забрасываешь', 4),
  singular3rdPerson: Word('забрасывает', 4),
  plural1stPerson: Word('забрасываем', 4),
  plural2ndPerson: Word('забрасываете', 4),
  plural3rdPerson: Word('забрасывают', 4),
  masculinePast: Word('забрасывал', 4),
  femininePast: Word('забрасывала', 4),
  neuterPast: Word('забрасывало', 4),
  pluralPast: Word('забрасывали', 4),
  imperativeInformal: Word('забрасывай', 4),
  imperativeFormal: Word('забрасывайте', 4),
  imperfect: [],
};

perfectVerbs.set(забрасывать.name.text, забрасывать);

export { забрасывать };