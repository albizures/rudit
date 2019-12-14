import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припрятывать: PerfectVerb = {
  name: Word('припрятывать', 5),
  singular1stPerson: Word('припрятываю', 5),
  singular2ndPerson: Word('припрятываешь', 5),
  singular3rdPerson: Word('припрятывает', 5),
  plural1stPerson: Word('припрятываем', 5),
  plural2ndPerson: Word('припрятываете', 5),
  plural3rdPerson: Word('припрятывают', 5),
  masculinePast: Word('припрятывал', 5),
  femininePast: Word('припрятывала', 5),
  neuterPast: Word('припрятывало', 5),
  pluralPast: Word('припрятывали', 5),
  imperativeInformal: Word('припрятывай', 5),
  imperativeFormal: Word('припрятывайте', 5),
  imperfect: [],
};

perfectVerbs.set(припрятывать.name.text, припрятывать);

export { припрятывать };