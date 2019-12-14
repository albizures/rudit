import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объесться: PerfectVerb = {
  name: Word('объесться', 3),
  singular1stPerson: Word('объемся', 3),
  singular2ndPerson: Word('объешься', 3),
  singular3rdPerson: Word('объестся', 3),
  plural1stPerson: Word('объедимся', 5),
  plural2ndPerson: Word('объедитесь', 5),
  plural3rdPerson: Word('объедятся', 5),
  masculinePast: Word('объелся', 3),
  femininePast: Word('объелась', 3),
  neuterPast: Word('объелось', 3),
  pluralPast: Word('объелись', 3),
  imperativeInformal: Word('объешься', 3),
  imperativeFormal: Word('объешьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(объесться.name.text, объесться);

export { объесться };