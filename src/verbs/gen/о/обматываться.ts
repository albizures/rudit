import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обматываться: PerfectVerb = {
  name: Word('обматываться', 3),
  singular1stPerson: Word('обматываюсь', 3),
  singular2ndPerson: Word('обматываешься', 3),
  singular3rdPerson: Word('обматывается', 3),
  plural1stPerson: Word('обматываемся', 3),
  plural2ndPerson: Word('обматываетесь', 3),
  plural3rdPerson: Word('обматываются', 3),
  masculinePast: Word('обматывался', 3),
  femininePast: Word('обматывалась', 3),
  neuterPast: Word('обматывалось', 3),
  pluralPast: Word('обматывались', 3),
  imperativeInformal: Word('обматывайся', 3),
  imperativeFormal: Word('обматывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обматываться.name.text, обматываться);

export { обматываться };