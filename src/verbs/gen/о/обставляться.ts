import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обставляться: PerfectVerb = {
  name: Word('обставляться', 7),
  singular1stPerson: Word('обставляюсь', 7),
  singular2ndPerson: Word('обставляешься', 7),
  singular3rdPerson: Word('обставляется', 7),
  plural1stPerson: Word('обставляемся', 7),
  plural2ndPerson: Word('обставляетесь', 7),
  plural3rdPerson: Word('обставляются', 7),
  masculinePast: Word('обставлялся', 7),
  femininePast: Word('обставлялась', 7),
  neuterPast: Word('обставлялось', 7),
  pluralPast: Word('обставлялись', 7),
  imperativeInformal: Word('обставляйся', 7),
  imperativeFormal: Word('обставляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(обставляться.name.text, обставляться);

export { обставляться };