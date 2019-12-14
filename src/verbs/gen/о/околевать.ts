import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const околевать: PerfectVerb = {
  name: Word('околевать', 6),
  singular1stPerson: Word('околеваю', 6),
  singular2ndPerson: Word('околеваешь', 6),
  singular3rdPerson: Word('околевает', 6),
  plural1stPerson: Word('околеваем', 6),
  plural2ndPerson: Word('околеваете', 6),
  plural3rdPerson: Word('околевают', 6),
  masculinePast: Word('околевал', 6),
  femininePast: Word('околевала', 6),
  neuterPast: Word('околевало', 6),
  pluralPast: Word('околевали', 6),
  imperativeInformal: Word('околевай', 6),
  imperativeFormal: Word('околевайте', 6),
  imperfect: [],
};

perfectVerbs.set(околевать.name.text, околевать);

export { околевать };