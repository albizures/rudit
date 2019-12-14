import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплотняться: PerfectVerb = {
  name: Word('уплотняться', 6),
  singular1stPerson: Word('уплотняюсь', 6),
  singular2ndPerson: Word('уплотняешься', 6),
  singular3rdPerson: Word('уплотняется', 6),
  plural1stPerson: Word('уплотняемся', 6),
  plural2ndPerson: Word('уплотняетесь', 6),
  plural3rdPerson: Word('уплотняются', 6),
  masculinePast: Word('уплотнялся', 6),
  femininePast: Word('уплотнялась', 6),
  neuterPast: Word('уплотнялось', 6),
  pluralPast: Word('уплотнялись', 6),
  imperativeInformal: Word('уплотняйся', 6),
  imperativeFormal: Word('уплотняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(уплотняться.name.text, уплотняться);

export { уплотняться };