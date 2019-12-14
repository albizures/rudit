import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отъесться: PerfectVerb = {
  name: Word('отъесться', 3),
  singular1stPerson: Word('отъемся', 3),
  singular2ndPerson: Word('отъешься', 3),
  singular3rdPerson: Word('отъестся', 3),
  plural1stPerson: Word('отъедимся', 5),
  plural2ndPerson: Word('отъедитесь', 5),
  plural3rdPerson: Word('отъедятся', 5),
  masculinePast: Word('отъелся', 3),
  femininePast: Word('отъелась', 3),
  neuterPast: Word('отъелось', 3),
  pluralPast: Word('отъелись', 3),
  imperativeInformal: Word('отъешься', 3),
  imperativeFormal: Word('отъешьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отъесться.name.text, отъесться);

export { отъесться };