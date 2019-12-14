import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const паять: PerfectVerb = {
  name: Word('паять', 2),
  singular1stPerson: Word('паяю', 2),
  singular2ndPerson: Word('паяешь', 2),
  singular3rdPerson: Word('паяет', 2),
  plural1stPerson: Word('паяем', 2),
  plural2ndPerson: Word('паяете', 2),
  plural3rdPerson: Word('паяют', 2),
  masculinePast: Word('паял', 2),
  femininePast: Word('паяла', 2),
  neuterPast: Word('паяло', 2),
  pluralPast: Word('паяли', 2),
  imperativeInformal: Word('паяй', 2),
  imperativeFormal: Word('паяйте', 2),
  imperfect: [],
};

perfectVerbs.set(паять.name.text, паять);

export { паять };