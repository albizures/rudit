import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измять: PerfectVerb = {
  name: Word('измять', 3),
  singular1stPerson: Word('изомну', 5),
  singular2ndPerson: Word('изомнёшь', 5),
  singular3rdPerson: Word('изомнёт', 5),
  plural1stPerson: Word('изомнём', 5),
  plural2ndPerson: Word('изомнёте', 5),
  plural3rdPerson: Word('изомнут', 5),
  masculinePast: Word('измял', 3),
  femininePast: Word('измяла', 3),
  neuterPast: Word('измяло', 3),
  pluralPast: Word('измяли', 3),
  imperativeInformal: Word('изомни', 5),
  imperativeFormal: Word('изомните', 5),
  imperfect: [],
};

perfectVerbs.set(измять.name.text, измять);

export { измять };