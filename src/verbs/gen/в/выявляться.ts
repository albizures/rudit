import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выявляться: PerfectVerb = {
  name: Word('выявляться', 5),
  singular1stPerson: Word('выявляюсь', 5),
  singular2ndPerson: Word('выявляешься', 5),
  singular3rdPerson: Word('выявляется', 5),
  plural1stPerson: Word('выявляемся', 5),
  plural2ndPerson: Word('выявляетесь', 5),
  plural3rdPerson: Word('выявляются', 5),
  masculinePast: Word('выявлялся', 5),
  femininePast: Word('выявлялась', 5),
  neuterPast: Word('выявлялось', 5),
  pluralPast: Word('выявлялись', 5),
  imperativeInformal: Word('выявляйся', 5),
  imperativeFormal: Word('выявляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выявляться.name.text, выявляться);

export { выявляться };