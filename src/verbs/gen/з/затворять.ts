import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затворять: PerfectVerb = {
  name: Word('затворять', 6),
  singular1stPerson: Word('затворяю', 6),
  singular2ndPerson: Word('затворяешь', 6),
  singular3rdPerson: Word('затворяет', 6),
  plural1stPerson: Word('затворяем', 6),
  plural2ndPerson: Word('затворяете', 6),
  plural3rdPerson: Word('затворяют', 6),
  masculinePast: Word('затворял', 6),
  femininePast: Word('затворяла', 6),
  neuterPast: Word('затворяло', 6),
  pluralPast: Word('затворяли', 6),
  imperativeInformal: Word('затворяй', 6),
  imperativeFormal: Word('затворяйте', 6),
  imperfect: [],
};

perfectVerbs.set(затворять.name.text, затворять);

export { затворять };