import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проторять: PerfectVerb = {
  name: Word('проторять', 6),
  singular1stPerson: Word('проторяю', 6),
  singular2ndPerson: Word('проторяешь', 6),
  singular3rdPerson: Word('проторяет', 6),
  plural1stPerson: Word('проторяем', 6),
  plural2ndPerson: Word('проторяете', 6),
  plural3rdPerson: Word('проторяют', 6),
  masculinePast: Word('проторял', 6),
  femininePast: Word('проторяла', 6),
  neuterPast: Word('проторяло', 6),
  pluralPast: Word('проторяли', 6),
  imperativeInformal: Word('проторяй', 6),
  imperativeFormal: Word('проторяйте', 6),
  imperfect: [],
};

perfectVerbs.set(проторять.name.text, проторять);

export { проторять };