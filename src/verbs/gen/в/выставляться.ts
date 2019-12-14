import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выставляться: PerfectVerb = {
  name: Word('выставляться', 7),
  singular1stPerson: Word('выставляюсь', 7),
  singular2ndPerson: Word('выставляешься', 7),
  singular3rdPerson: Word('выставляется', 7),
  plural1stPerson: Word('выставляемся', 7),
  plural2ndPerson: Word('выставляетесь', 7),
  plural3rdPerson: Word('выставляются', 7),
  masculinePast: Word('выставлялся', 7),
  femininePast: Word('выставлялась', 7),
  neuterPast: Word('выставлялось', 7),
  pluralPast: Word('выставлялись', 7),
  imperativeInformal: Word('выставляйся', 7),
  imperativeFormal: Word('выставляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(выставляться.name.text, выставляться);

export { выставляться };