import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истлевать: PerfectVerb = {
  name: Word('истлевать', 6),
  singular1stPerson: Word('истлеваю', 6),
  singular2ndPerson: Word('истлеваешь', 6),
  singular3rdPerson: Word('истлевает', 6),
  plural1stPerson: Word('истлеваем', 6),
  plural2ndPerson: Word('истлеваете', 6),
  plural3rdPerson: Word('истлевают', 6),
  masculinePast: Word('истлевал', 6),
  femininePast: Word('истлевала', 6),
  neuterPast: Word('истлевало', 6),
  pluralPast: Word('истлевали', 6),
  imperativeInformal: Word('истлевай', 6),
  imperativeFormal: Word('истлевайте', 6),
  imperfect: [],
};

perfectVerbs.set(истлевать.name.text, истлевать);

export { истлевать };