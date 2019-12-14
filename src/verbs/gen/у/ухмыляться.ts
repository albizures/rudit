import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухмыляться: PerfectVerb = {
  name: Word('ухмыляться', 5),
  singular1stPerson: Word('ухмыляюсь', 5),
  singular2ndPerson: Word('ухмыляешься', 5),
  singular3rdPerson: Word('ухмыляется', 5),
  plural1stPerson: Word('ухмыляемся', 5),
  plural2ndPerson: Word('ухмыляетесь', 5),
  plural3rdPerson: Word('ухмыляются', 5),
  masculinePast: Word('ухмылялся', 5),
  femininePast: Word('ухмылялась', 5),
  neuterPast: Word('ухмылялось', 5),
  pluralPast: Word('ухмылялись', 5),
  imperativeInformal: Word('ухмыляйся', 5),
  imperativeFormal: Word('ухмыляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ухмыляться.name.text, ухмыляться);

export { ухмыляться };