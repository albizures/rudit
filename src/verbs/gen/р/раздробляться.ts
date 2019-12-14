import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздробляться: PerfectVerb = {
  name: Word('раздробляться', 8),
  singular1stPerson: Word('раздробляюсь', 8),
  singular2ndPerson: Word('раздробляешься', 8),
  singular3rdPerson: Word('раздробляется', 8),
  plural1stPerson: Word('раздробляемся', 8),
  plural2ndPerson: Word('раздробляетесь', 8),
  plural3rdPerson: Word('раздробляются', 8),
  masculinePast: Word('раздроблялся', 8),
  femininePast: Word('раздроблялась', 8),
  neuterPast: Word('раздроблялось', 8),
  pluralPast: Word('раздроблялись', 8),
  imperativeInformal: Word('раздробляйся', 8),
  imperativeFormal: Word('раздробляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(раздробляться.name.text, раздробляться);

export { раздробляться };