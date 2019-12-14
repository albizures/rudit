import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наесться: PerfectVerb = {
  name: Word('наесться', 2),
  singular1stPerson: Word('наемся', 2),
  singular2ndPerson: Word('наешься', 2),
  singular3rdPerson: Word('наестся', 2),
  plural1stPerson: Word('наедимся', 4),
  plural2ndPerson: Word('наедитесь', 4),
  plural3rdPerson: Word('наедятся', 4),
  masculinePast: Word('наелся', 2),
  femininePast: Word('наелась', 2),
  neuterPast: Word('наелось', 2),
  pluralPast: Word('наелись', 2),
  imperativeInformal: Word('наешься', 2),
  imperativeFormal: Word('наешьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(наесться.name.text, наесться);

export { наесться };