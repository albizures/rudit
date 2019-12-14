import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обосновывать: PerfectVerb = {
  name: Word('обосновывать', 5),
  singular1stPerson: Word('обосновываю', 5),
  singular2ndPerson: Word('обосновываешь', 5),
  singular3rdPerson: Word('обосновывает', 5),
  plural1stPerson: Word('обосновываем', 5),
  plural2ndPerson: Word('обосновываете', 5),
  plural3rdPerson: Word('обосновывают', 5),
  masculinePast: Word('обосновывал', 5),
  femininePast: Word('обосновывала', 5),
  neuterPast: Word('обосновывало', 5),
  pluralPast: Word('обосновывали', 5),
  imperativeInformal: Word('обосновывай', 5),
  imperativeFormal: Word('обосновывайте', 5),
  imperfect: [],
};

perfectVerbs.set(обосновывать.name.text, обосновывать);

export { обосновывать };