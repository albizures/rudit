import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подразделяться: PerfectVerb = {
  name: Word('подразделяться', 9),
  singular1stPerson: Word('подразделяюсь', 9),
  singular2ndPerson: Word('подразделяешься', 9),
  singular3rdPerson: Word('подразделяется', 9),
  plural1stPerson: Word('подразделяемся', 9),
  plural2ndPerson: Word('подразделяетесь', 9),
  plural3rdPerson: Word('подразделяются', 9),
  masculinePast: Word('подразделялся', 9),
  femininePast: Word('подразделялась', 9),
  neuterPast: Word('подразделялось', 9),
  pluralPast: Word('подразделялись', 9),
  imperativeInformal: Word('подразделяйся', 9),
  imperativeFormal: Word('подразделяйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(подразделяться.name.text, подразделяться);

export { подразделяться };