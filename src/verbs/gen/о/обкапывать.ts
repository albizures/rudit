import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкапывать: PerfectVerb = {
  name: Word('обкапывать', 3),
  singular1stPerson: Word('обкапываю', 3),
  singular2ndPerson: Word('обкапываешь', 3),
  singular3rdPerson: Word('обкапывает', 3),
  plural1stPerson: Word('обкапываем', 3),
  plural2ndPerson: Word('обкапываете', 3),
  plural3rdPerson: Word('обкапывают', 3),
  masculinePast: Word('обкапывал', 3),
  femininePast: Word('обкапывала', 3),
  neuterPast: Word('обкапывало', 3),
  pluralPast: Word('обкапывали', 3),
  imperativeInformal: Word('обкапывай', 3),
  imperativeFormal: Word('обкапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обкапывать.name.text, обкапывать);

export { обкапывать };