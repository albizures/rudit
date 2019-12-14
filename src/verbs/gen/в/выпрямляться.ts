import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрямляться: PerfectVerb = {
  name: Word('выпрямляться', 7),
  singular1stPerson: Word('выпрямляюсь', 7),
  singular2ndPerson: Word('выпрямляешься', 7),
  singular3rdPerson: Word('выпрямляется', 7),
  plural1stPerson: Word('выпрямляемся', 7),
  plural2ndPerson: Word('выпрямляетесь', 7),
  plural3rdPerson: Word('выпрямляются', 7),
  masculinePast: Word('выпрямлялся', 7),
  femininePast: Word('выпрямлялась', 7),
  neuterPast: Word('выпрямлялось', 7),
  pluralPast: Word('выпрямлялись', 7),
  imperativeInformal: Word('выпрямляйся', 7),
  imperativeFormal: Word('выпрямляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(выпрямляться.name.text, выпрямляться);

export { выпрямляться };