import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const видоизменяться: PerfectVerb = {
  name: Word('видоизменяться', 9),
  singular1stPerson: Word('видоизменяюсь', 9),
  singular2ndPerson: Word('видоизменяешься', 9),
  singular3rdPerson: Word('видоизменяется', 9),
  plural1stPerson: Word('видоизменяемся', 9),
  plural2ndPerson: Word('видоизменяетесь', 9),
  plural3rdPerson: Word('видоизменяются', 9),
  masculinePast: Word('видоизменялся', 9),
  femininePast: Word('видоизменялась', 9),
  neuterPast: Word('видоизменялось', 9),
  pluralPast: Word('видоизменялись', 9),
  imperativeInformal: Word('видоизменяйся', 9),
  imperativeFormal: Word('видоизменяйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(видоизменяться.name.text, видоизменяться);

export { видоизменяться };