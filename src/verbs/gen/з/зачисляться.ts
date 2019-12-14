import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачисляться: PerfectVerb = {
  name: Word('зачисляться', 6),
  singular1stPerson: Word('зачисляюсь', 6),
  singular2ndPerson: Word('зачисляешься', 6),
  singular3rdPerson: Word('зачисляется', 6),
  plural1stPerson: Word('зачисляемся', 6),
  plural2ndPerson: Word('зачисляетесь', 6),
  plural3rdPerson: Word('зачисляются', 6),
  masculinePast: Word('зачислялся', 6),
  femininePast: Word('зачислялась', 6),
  neuterPast: Word('зачислялось', 6),
  pluralPast: Word('зачислялись', 6),
  imperativeInformal: Word('зачисляйся', 6),
  imperativeFormal: Word('зачисляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(зачисляться.name.text, зачисляться);

export { зачисляться };