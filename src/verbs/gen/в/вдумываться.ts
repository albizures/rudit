import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдумываться: PerfectVerb = {
  name: Word('вдумываться', 2),
  singular1stPerson: Word('вдумываюсь', 2),
  singular2ndPerson: Word('вдумываешься', 2),
  singular3rdPerson: Word('вдумывается', 2),
  plural1stPerson: Word('вдумываемся', 2),
  plural2ndPerson: Word('вдумываетесь', 2),
  plural3rdPerson: Word('вдумываются', 2),
  masculinePast: Word('вдумывался', 2),
  femininePast: Word('вдумывалась', 2),
  neuterPast: Word('вдумывалось', 2),
  pluralPast: Word('вдумывались', 2),
  imperativeInformal: Word('вдумывайся', 2),
  imperativeFormal: Word('вдумывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вдумываться.name.text, вдумываться);

export { вдумываться };