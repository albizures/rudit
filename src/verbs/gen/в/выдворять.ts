import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдворять: PerfectVerb = {
  name: Word('выдворять', 6),
  singular1stPerson: Word('выдворяю', 6),
  singular2ndPerson: Word('выдворяешь', 6),
  singular3rdPerson: Word('выдворяет', 6),
  plural1stPerson: Word('выдворяем', 6),
  plural2ndPerson: Word('выдворяете', 6),
  plural3rdPerson: Word('выдворяют', 6),
  masculinePast: Word('выдворял', 6),
  femininePast: Word('выдворяла', 6),
  neuterPast: Word('выдворяло', 6),
  pluralPast: Word('выдворяли', 6),
  imperativeInformal: Word('выдворяй', 6),
  imperativeFormal: Word('выдворяйте', 6),
  imperfect: [],
};

perfectVerbs.set(выдворять.name.text, выдворять);

export { выдворять };