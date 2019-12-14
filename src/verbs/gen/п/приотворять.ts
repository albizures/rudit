import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приотворять: PerfectVerb = {
  name: Word('приотворять', 8),
  singular1stPerson: Word('приотворяю', 8),
  singular2ndPerson: Word('приотворяешь', 8),
  singular3rdPerson: Word('приотворяет', 8),
  plural1stPerson: Word('приотворяем', 8),
  plural2ndPerson: Word('приотворяете', 8),
  plural3rdPerson: Word('приотворяют', 8),
  masculinePast: Word('приотворял', 8),
  femininePast: Word('приотворяла', 8),
  neuterPast: Word('приотворяло', 8),
  pluralPast: Word('приотворяли', 8),
  imperativeInformal: Word('приотворяй', 8),
  imperativeFormal: Word('приотворяйте', 8),
  imperfect: [],
};

perfectVerbs.set(приотворять.name.text, приотворять);

export { приотворять };