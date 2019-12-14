import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const якшаться: PerfectVerb = {
  name: Word('якшаться', 3),
  singular1stPerson: Word('якшаюсь', 3),
  singular2ndPerson: Word('якшаешься', 3),
  singular3rdPerson: Word('якшается', 3),
  plural1stPerson: Word('якшаемся', 3),
  plural2ndPerson: Word('якшаетесь', 3),
  plural3rdPerson: Word('якшаются', 3),
  masculinePast: Word('якшался', 3),
  femininePast: Word('якшалась', 3),
  neuterPast: Word('якшалось', 3),
  pluralPast: Word('якшались', 3),
  imperativeInformal: Word('якшайся', 3),
  imperativeFormal: Word('якшайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(якшаться.name.text, якшаться);

export { якшаться };