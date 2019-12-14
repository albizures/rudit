import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одухотворять: PerfectVerb = {
  name: Word('одухотворять', 9),
  singular1stPerson: Word('одухотворяю', 9),
  singular2ndPerson: Word('одухотворяешь', 9),
  singular3rdPerson: Word('одухотворяет', 9),
  plural1stPerson: Word('одухотворяем', 9),
  plural2ndPerson: Word('одухотворяете', 9),
  plural3rdPerson: Word('одухотворяют', 9),
  masculinePast: Word('одухотворял', 9),
  femininePast: Word('одухотворяла', 9),
  neuterPast: Word('одухотворяло', 9),
  pluralPast: Word('одухотворяли', 9),
  imperativeInformal: Word('одухотворяй', 9),
  imperativeFormal: Word('одухотворяйте', 9),
  imperfect: [],
};

perfectVerbs.set(одухотворять.name.text, одухотворять);

export { одухотворять };