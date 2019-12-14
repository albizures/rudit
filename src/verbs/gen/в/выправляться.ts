import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выправляться: PerfectVerb = {
  name: Word('выправляться', 7),
  singular1stPerson: Word('выправляюсь', 7),
  singular2ndPerson: Word('выправляешься', 7),
  singular3rdPerson: Word('выправляется', 7),
  plural1stPerson: Word('выправляемся', 7),
  plural2ndPerson: Word('выправляетесь', 7),
  plural3rdPerson: Word('выправляются', 7),
  masculinePast: Word('выправлялся', 7),
  femininePast: Word('выправлялась', 7),
  neuterPast: Word('выправлялось', 7),
  pluralPast: Word('выправлялись', 7),
  imperativeInformal: Word('выправляйся', 7),
  imperativeFormal: Word('выправляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(выправляться.name.text, выправляться);

export { выправляться };