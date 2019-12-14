import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реять: PerfectVerb = {
  name: Word('реять', 1),
  singular1stPerson: Word('рею', 1),
  singular2ndPerson: Word('реешь', 1),
  singular3rdPerson: Word('реет', 1),
  plural1stPerson: Word('реем', 1),
  plural2ndPerson: Word('реете', 1),
  plural3rdPerson: Word('реют', 1),
  masculinePast: Word('реял', 1),
  femininePast: Word('реяла', 1),
  neuterPast: Word('реяло', 1),
  pluralPast: Word('реяли', 1),
  imperativeInformal: Word('рей', 1),
  imperativeFormal: Word('рейте', 1),
  imperfect: [],
};

perfectVerbs.set(реять.name.text, реять);

export { реять };