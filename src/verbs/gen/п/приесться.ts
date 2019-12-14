import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приесться: PerfectVerb = {
  name: Word('приесться', 3),
  singular1stPerson: Word('приемся', 3),
  singular2ndPerson: Word('приешься', 3),
  singular3rdPerson: Word('приестся', 3),
  plural1stPerson: Word('приедимся', 5),
  plural2ndPerson: Word('приедитесь', 5),
  plural3rdPerson: Word('приедятся', 5),
  masculinePast: Word('приелся', 3),
  femininePast: Word('приелась', 3),
  neuterPast: Word('приелось', 3),
  pluralPast: Word('приелись', 3),
  imperativeInformal: Word('приешься', 3),
  imperativeFormal: Word('приешьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(приесться.name.text, приесться);

export { приесться };