import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растворять: PerfectVerb = {
  name: Word('растворять', 7),
  singular1stPerson: Word('растворяю', 7),
  singular2ndPerson: Word('растворяешь', 7),
  singular3rdPerson: Word('растворяет', 7),
  plural1stPerson: Word('растворяем', 7),
  plural2ndPerson: Word('растворяете', 7),
  plural3rdPerson: Word('растворяют', 7),
  masculinePast: Word('растворял', 7),
  femininePast: Word('растворяла', 7),
  neuterPast: Word('растворяло', 7),
  pluralPast: Word('растворяли', 7),
  imperativeInformal: Word('растворяй', 7),
  imperativeFormal: Word('растворяйте', 7),
  imperfect: [],
};

perfectVerbs.set(растворять.name.text, растворять);

export { растворять };