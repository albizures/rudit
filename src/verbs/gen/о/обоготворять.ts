import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обоготворять: PerfectVerb = {
  name: Word('обоготворять', 9),
  singular1stPerson: Word('обоготворяю', 9),
  singular2ndPerson: Word('обоготворяешь', 9),
  singular3rdPerson: Word('обоготворяет', 9),
  plural1stPerson: Word('обоготворяем', 9),
  plural2ndPerson: Word('обоготворяете', 9),
  plural3rdPerson: Word('обоготворяют', 9),
  masculinePast: Word('обоготворял', 9),
  femininePast: Word('обоготворяла', 9),
  neuterPast: Word('обоготворяло', 9),
  pluralPast: Word('обоготворяли', 9),
  imperativeInformal: Word('обоготворяй', 9),
  imperativeFormal: Word('обоготворяйте', 9),
  imperfect: [],
};

perfectVerbs.set(обоготворять.name.text, обоготворять);

export { обоготворять };