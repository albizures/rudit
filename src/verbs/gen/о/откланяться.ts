import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откланяться: PerfectVerb = {
  name: Word('откланяться', 4),
  singular1stPerson: Word('откланяюсь', 4),
  singular2ndPerson: Word('откланяешься', 4),
  singular3rdPerson: Word('откланяется', 4),
  plural1stPerson: Word('откланяемся', 4),
  plural2ndPerson: Word('откланяетесь', 4),
  plural3rdPerson: Word('откланяются', 4),
  masculinePast: Word('откланялся', 4),
  femininePast: Word('откланялась', 4),
  neuterPast: Word('откланялось', 4),
  pluralPast: Word('откланялись', 4),
  imperativeInformal: Word('откланяйся', 4),
  imperativeFormal: Word('откланяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(откланяться.name.text, откланяться);

export { откланяться };