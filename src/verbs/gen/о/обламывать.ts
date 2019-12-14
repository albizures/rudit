import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обламывать: PerfectVerb = {
  name: Word('обламывать', 3),
  singular1stPerson: Word('обламываю', 3),
  singular2ndPerson: Word('обламываешь', 3),
  singular3rdPerson: Word('обламывает', 3),
  plural1stPerson: Word('обламываем', 3),
  plural2ndPerson: Word('обламываете', 3),
  plural3rdPerson: Word('обламывают', 3),
  masculinePast: Word('обламывал', 3),
  femininePast: Word('обламывала', 3),
  neuterPast: Word('обламывало', 3),
  pluralPast: Word('обламывали', 3),
  imperativeInformal: Word('обламывай', 3),
  imperativeFormal: Word('обламывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обламывать.name.text, обламывать);

export { обламывать };