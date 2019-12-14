import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разматываться: PerfectVerb = {
  name: Word('разматываться', 4),
  singular1stPerson: Word('разматываюсь', 4),
  singular2ndPerson: Word('разматываешься', 4),
  singular3rdPerson: Word('разматывается', 4),
  plural1stPerson: Word('разматываемся', 4),
  plural2ndPerson: Word('разматываетесь', 4),
  plural3rdPerson: Word('разматываются', 4),
  masculinePast: Word('разматывался', 4),
  femininePast: Word('разматывалась', 4),
  neuterPast: Word('разматывалось', 4),
  pluralPast: Word('разматывались', 4),
  imperativeInformal: Word('разматывайся', 4),
  imperativeFormal: Word('разматывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разматываться.name.text, разматываться);

export { разматываться };