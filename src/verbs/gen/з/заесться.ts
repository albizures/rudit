import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заесться: PerfectVerb = {
  name: Word('заесться', 2),
  singular1stPerson: Word('заемся', 2),
  singular2ndPerson: Word('заешься', 2),
  singular3rdPerson: Word('заестся', 2),
  plural1stPerson: Word('заедимся', 4),
  plural2ndPerson: Word('заедитесь', 4),
  plural3rdPerson: Word('заедятся', 4),
  masculinePast: Word('заелся', 2),
  femininePast: Word('заелась', 2),
  neuterPast: Word('заелось', 2),
  pluralPast: Word('заелись', 2),
  imperativeInformal: Word('заешься', 2),
  imperativeFormal: Word('заешьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(заесться.name.text, заесться);

export { заесться };