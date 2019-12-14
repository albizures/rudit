import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разменяться: PerfectVerb = {
  name: Word('разменяться', 6),
  singular1stPerson: Word('разменяюсь', 6),
  singular2ndPerson: Word('разменяешься', 6),
  singular3rdPerson: Word('разменяется', 6),
  plural1stPerson: Word('разменяемся', 6),
  plural2ndPerson: Word('разменяетесь', 6),
  plural3rdPerson: Word('разменяются', 6),
  masculinePast: Word('разменялся', 6),
  femininePast: Word('разменялась', 6),
  neuterPast: Word('разменялось', 6),
  pluralPast: Word('разменялись', 6),
  imperativeInformal: Word('разменяйся', 6),
  imperativeFormal: Word('разменяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разменяться.name.text, разменяться);

export { разменяться };