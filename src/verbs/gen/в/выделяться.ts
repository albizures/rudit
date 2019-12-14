import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выделяться: PerfectVerb = {
  name: Word('выделяться', 5),
  singular1stPerson: Word('выделяюсь', 5),
  singular2ndPerson: Word('выделяешься', 5),
  singular3rdPerson: Word('выделяется', 5),
  plural1stPerson: Word('выделяемся', 5),
  plural2ndPerson: Word('выделяетесь', 5),
  plural3rdPerson: Word('выделяются', 5),
  masculinePast: Word('выделялся', 5),
  femininePast: Word('выделялась', 5),
  neuterPast: Word('выделялось', 5),
  pluralPast: Word('выделялись', 5),
  imperativeInformal: Word('выделяйся', 5),
  imperativeFormal: Word('выделяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выделяться.name.text, выделяться);

export { выделяться };