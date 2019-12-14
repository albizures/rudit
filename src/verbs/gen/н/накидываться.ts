import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накидываться: PerfectVerb = {
  name: Word('накидываться', 3),
  singular1stPerson: Word('накидываюсь', 3),
  singular2ndPerson: Word('накидываешься', 3),
  singular3rdPerson: Word('накидывается', 3),
  plural1stPerson: Word('накидываемся', 3),
  plural2ndPerson: Word('накидываетесь', 3),
  plural3rdPerson: Word('накидываются', 3),
  masculinePast: Word('накидывался', 3),
  femininePast: Word('накидывалась', 3),
  neuterPast: Word('накидывалось', 3),
  pluralPast: Word('накидывались', 3),
  imperativeInformal: Word('накидывайся', 3),
  imperativeFormal: Word('накидывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(накидываться.name.text, накидываться);

export { накидываться };