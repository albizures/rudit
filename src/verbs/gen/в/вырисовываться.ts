import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырисовываться: PerfectVerb = {
  name: Word('вырисовываться', 5),
  singular1stPerson: Word('вырисовываюсь', 5),
  singular2ndPerson: Word('вырисовываешься', 5),
  singular3rdPerson: Word('вырисовывается', 5),
  plural1stPerson: Word('вырисовываемся', 5),
  plural2ndPerson: Word('вырисовываетесь', 5),
  plural3rdPerson: Word('вырисовываются', 5),
  masculinePast: Word('вырисовывался', 5),
  femininePast: Word('вырисовывалась', 5),
  neuterPast: Word('вырисовывалось', 5),
  pluralPast: Word('вырисовывались', 5),
  imperativeInformal: Word('вырисовывайся', 5),
  imperativeFormal: Word('вырисовывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вырисовываться.name.text, вырисовываться);

export { вырисовываться };