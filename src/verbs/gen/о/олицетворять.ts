import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const олицетворять: PerfectVerb = {
  name: Word('олицетворять', 9),
  singular1stPerson: Word('олицетворяю', 9),
  singular2ndPerson: Word('олицетворяешь', 9),
  singular3rdPerson: Word('олицетворяет', 9),
  plural1stPerson: Word('олицетворяем', 9),
  plural2ndPerson: Word('олицетворяете', 9),
  plural3rdPerson: Word('олицетворяют', 9),
  masculinePast: Word('олицетворял', 9),
  femininePast: Word('олицетворяла', 9),
  neuterPast: Word('олицетворяло', 9),
  pluralPast: Word('олицетворяли', 9),
  imperativeInformal: Word('олицетворяй', 9),
  imperativeFormal: Word('олицетворяйте', 9),
  imperfect: [],
};

perfectVerbs.set(олицетворять.name.text, олицетворять);

export { олицетворять };