import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопротивляться: PerfectVerb = {
  name: Word('сопротивляться', 9),
  singular1stPerson: Word('сопротивляюсь', 9),
  singular2ndPerson: Word('сопротивляешься', 9),
  singular3rdPerson: Word('сопротивляется', 9),
  plural1stPerson: Word('сопротивляемся', 9),
  plural2ndPerson: Word('сопротивляетесь', 9),
  plural3rdPerson: Word('сопротивляются', 9),
  masculinePast: Word('сопротивлялся', 9),
  femininePast: Word('сопротивлялась', 9),
  neuterPast: Word('сопротивлялось', 9),
  pluralPast: Word('сопротивлялись', 9),
  imperativeInformal: Word('сопротивляйся', 9),
  imperativeFormal: Word('сопротивляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(сопротивляться.name.text, сопротивляться);

export { сопротивляться };