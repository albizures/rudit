import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырисовывать: PerfectVerb = {
  name: Word('вырисовывать', 5),
  singular1stPerson: Word('вырисовываю', 5),
  singular2ndPerson: Word('вырисовываешь', 5),
  singular3rdPerson: Word('вырисовывает', 5),
  plural1stPerson: Word('вырисовываем', 5),
  plural2ndPerson: Word('вырисовываете', 5),
  plural3rdPerson: Word('вырисовывают', 5),
  masculinePast: Word('вырисовывал', 5),
  femininePast: Word('вырисовывала', 5),
  neuterPast: Word('вырисовывало', 5),
  pluralPast: Word('вырисовывали', 5),
  imperativeInformal: Word('вырисовывай', 5),
  imperativeFormal: Word('вырисовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(вырисовывать.name.text, вырисовывать);

export { вырисовывать };