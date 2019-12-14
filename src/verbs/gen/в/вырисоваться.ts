import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырисоваться: PerfectVerb = {
  name: Word('вырисоваться', 1),
  singular1stPerson: Word('вырисуюсь', 1),
  singular2ndPerson: Word('вырисуешься', 1),
  singular3rdPerson: Word('вырисуется', 1),
  plural1stPerson: Word('вырисуемся', 1),
  plural2ndPerson: Word('вырисуетесь', 1),
  plural3rdPerson: Word('вырисуются', 1),
  masculinePast: Word('вырисовался', 1),
  femininePast: Word('вырисовалась', 1),
  neuterPast: Word('вырисовалось', 1),
  pluralPast: Word('вырисовались', 1),
  imperativeInformal: Word('вырисуйся', 1),
  imperativeFormal: Word('вырисуйтесь', 1),
  imperfect: [],
};

perfectVerbs.set(вырисоваться.name.text, вырисоваться);

export { вырисоваться };