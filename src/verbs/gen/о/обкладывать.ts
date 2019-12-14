import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкладывать: PerfectVerb = {
  name: Word('обкладывать', 4),
  singular1stPerson: Word('обкладываю', 4),
  singular2ndPerson: Word('обкладываешь', 4),
  singular3rdPerson: Word('обкладывает', 4),
  plural1stPerson: Word('обкладываем', 4),
  plural2ndPerson: Word('обкладываете', 4),
  plural3rdPerson: Word('обкладывают', 4),
  masculinePast: Word('обкладывал', 4),
  femininePast: Word('обкладывала', 4),
  neuterPast: Word('обкладывало', 4),
  pluralPast: Word('обкладывали', 4),
  imperativeInformal: Word('обкладывай', 4),
  imperativeFormal: Word('обкладывайте', 4),
  imperfect: [],
};

perfectVerbs.set(обкладывать.name.text, обкладывать);

export { обкладывать };