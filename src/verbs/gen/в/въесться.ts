import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const въесться: PerfectVerb = {
  name: Word('въесться', 2),
  singular1stPerson: Word('въемся', 2),
  singular2ndPerson: Word('въешься', 2),
  singular3rdPerson: Word('въестся', 2),
  plural1stPerson: Word('въедимся', 4),
  plural2ndPerson: Word('въедитесь', 4),
  plural3rdPerson: Word('въедятся', 4),
  masculinePast: Word('въелся', 2),
  femininePast: Word('въелась', 2),
  neuterPast: Word('въелось', 2),
  pluralPast: Word('въелись', 2),
  imperativeInformal: Word('въешься', 2),
  imperativeFormal: Word('въешьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(въесться.name.text, въесться);

export { въесться };