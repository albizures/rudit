import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкрадывать: PerfectVerb = {
  name: Word('обкрадывать', 4),
  singular1stPerson: Word('обкрадываю', 4),
  singular2ndPerson: Word('обкрадываешь', 4),
  singular3rdPerson: Word('обкрадывает', 4),
  plural1stPerson: Word('обкрадываем', 4),
  plural2ndPerson: Word('обкрадываете', 4),
  plural3rdPerson: Word('обкрадывают', 4),
  masculinePast: Word('обкрадывал', 4),
  femininePast: Word('обкрадывала', 4),
  neuterPast: Word('обкрадывало', 4),
  pluralPast: Word('обкрадывали', 4),
  imperativeInformal: Word('обкрадывай', 4),
  imperativeFormal: Word('обкрадывайте', 4),
  imperfect: [],
};

perfectVerbs.set(обкрадывать.name.text, обкрадывать);

export { обкрадывать };