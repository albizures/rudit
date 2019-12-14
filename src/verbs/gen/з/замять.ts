import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замять: PerfectVerb = {
  name: Word('замять', 3),
  singular1stPerson: Word('замну', 4),
  singular2ndPerson: Word('замнёшь', 1),
  singular3rdPerson: Word('замнёт', 1),
  plural1stPerson: Word('замнём', 1),
  plural2ndPerson: Word('замнёте', 1),
  plural3rdPerson: Word('замнут', 4),
  masculinePast: Word('замял', 3),
  femininePast: Word('замяла', 3),
  neuterPast: Word('замяло', 3),
  pluralPast: Word('замяли', 3),
  imperativeInformal: Word('замни', 4),
  imperativeFormal: Word('замните', 4),
  imperfect: [],
};

perfectVerbs.set(замять.name.text, замять);

export { замять };