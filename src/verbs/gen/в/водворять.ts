import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const водворять: PerfectVerb = {
  name: Word('водворять', 6),
  singular1stPerson: Word('водворяю', 6),
  singular2ndPerson: Word('водворяешь', 6),
  singular3rdPerson: Word('водворяет', 6),
  plural1stPerson: Word('водворяем', 6),
  plural2ndPerson: Word('водворяете', 6),
  plural3rdPerson: Word('водворяют', 6),
  masculinePast: Word('водворял', 6),
  femininePast: Word('водворяла', 6),
  neuterPast: Word('водворяло', 6),
  pluralPast: Word('водворяли', 6),
  imperativeInformal: Word('водворяй', 6),
  imperativeFormal: Word('водворяйте', 6),
  imperfect: [],
};

perfectVerbs.set(водворять.name.text, водворять);

export { водворять };