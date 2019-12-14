import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срываться: PerfectVerb = {
  name: Word('срываться', 4),
  singular1stPerson: Word('срываюсь', 4),
  singular2ndPerson: Word('срываешься', 4),
  singular3rdPerson: Word('срывается', 4),
  plural1stPerson: Word('срываемся', 4),
  plural2ndPerson: Word('срываетесь', 4),
  plural3rdPerson: Word('срываются', 4),
  masculinePast: Word('срывался', 4),
  femininePast: Word('срывалась', 4),
  neuterPast: Word('срывалось', 4),
  pluralPast: Word('срывались', 4),
  imperativeInformal: Word('срывайся', 4),
  imperativeFormal: Word('срывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(срываться.name.text, срываться);

export { срываться };