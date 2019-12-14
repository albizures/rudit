import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвязываться: PerfectVerb = {
  name: Word('обвязываться', 3),
  singular1stPerson: Word('обвязываюсь', 3),
  singular2ndPerson: Word('обвязываешься', 3),
  singular3rdPerson: Word('обвязывается', 3),
  plural1stPerson: Word('обвязываемся', 3),
  plural2ndPerson: Word('обвязываетесь', 3),
  plural3rdPerson: Word('обвязываются', 3),
  masculinePast: Word('обвязывался', 3),
  femininePast: Word('обвязывалась', 3),
  neuterPast: Word('обвязывалось', 3),
  pluralPast: Word('обвязывались', 3),
  imperativeInformal: Word('обвязывайся', 3),
  imperativeFormal: Word('обвязывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обвязываться.name.text, обвязываться);

export { обвязываться };