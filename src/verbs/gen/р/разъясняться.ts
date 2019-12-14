import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъясняться: PerfectVerb = {
  name: Word('разъясняться', 7),
  singular1stPerson: Word('разъясняюсь', 7),
  singular2ndPerson: Word('разъясняешься', 7),
  singular3rdPerson: Word('разъясняется', 7),
  plural1stPerson: Word('разъясняемся', 7),
  plural2ndPerson: Word('разъясняетесь', 7),
  plural3rdPerson: Word('разъясняются', 7),
  masculinePast: Word('разъяснялся', 7),
  femininePast: Word('разъяснялась', 7),
  neuterPast: Word('разъяснялось', 7),
  pluralPast: Word('разъяснялись', 7),
  imperativeInformal: Word('разъясняйся', 7),
  imperativeFormal: Word('разъясняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разъясняться.name.text, разъясняться);

export { разъясняться };