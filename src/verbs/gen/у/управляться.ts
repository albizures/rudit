import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const управляться: PerfectVerb = {
  name: Word('управляться', 6),
  singular1stPerson: Word('управляюсь', 6),
  singular2ndPerson: Word('управляешься', 6),
  singular3rdPerson: Word('управляется', 6),
  plural1stPerson: Word('управляемся', 6),
  plural2ndPerson: Word('управляетесь', 6),
  plural3rdPerson: Word('управляются', 6),
  masculinePast: Word('управлялся', 6),
  femininePast: Word('управлялась', 6),
  neuterPast: Word('управлялось', 6),
  pluralPast: Word('управлялись', 6),
  imperativeInformal: Word('управляйся', 6),
  imperativeFormal: Word('управляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(управляться.name.text, управляться);

export { управляться };