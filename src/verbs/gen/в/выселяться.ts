import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выселяться: PerfectVerb = {
  name: Word('выселяться', 5),
  singular1stPerson: Word('выселяюсь', 5),
  singular2ndPerson: Word('выселяешься', 5),
  singular3rdPerson: Word('выселяется', 5),
  plural1stPerson: Word('выселяемся', 5),
  plural2ndPerson: Word('выселяетесь', 5),
  plural3rdPerson: Word('выселяются', 5),
  masculinePast: Word('выселялся', 5),
  femininePast: Word('выселялась', 5),
  neuterPast: Word('выселялось', 5),
  pluralPast: Word('выселялись', 5),
  imperativeInformal: Word('выселяйся', 5),
  imperativeFormal: Word('выселяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выселяться.name.text, выселяться);

export { выселяться };