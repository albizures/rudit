import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отворять: PerfectVerb = {
  name: Word('отворять', 5),
  singular1stPerson: Word('отворяю', 5),
  singular2ndPerson: Word('отворяешь', 5),
  singular3rdPerson: Word('отворяет', 5),
  plural1stPerson: Word('отворяем', 5),
  plural2ndPerson: Word('отворяете', 5),
  plural3rdPerson: Word('отворяют', 5),
  masculinePast: Word('отворял', 5),
  femininePast: Word('отворяла', 5),
  neuterPast: Word('отворяло', 5),
  pluralPast: Word('отворяли', 5),
  imperativeInformal: Word('отворяй', 5),
  imperativeFormal: Word('отворяйте', 5),
  imperfect: [],
};

perfectVerbs.set(отворять.name.text, отворять);

export { отворять };