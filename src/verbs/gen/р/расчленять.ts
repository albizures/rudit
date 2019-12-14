import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчленять: PerfectVerb = {
  name: Word('расчленять', 7),
  singular1stPerson: Word('расчленяю', 7),
  singular2ndPerson: Word('расчленяешь', 7),
  singular3rdPerson: Word('расчленяет', 7),
  plural1stPerson: Word('расчленяем', 7),
  plural2ndPerson: Word('расчленяете', 7),
  plural3rdPerson: Word('расчленяют', 7),
  masculinePast: Word('расчленял', 7),
  femininePast: Word('расчленяла', 7),
  neuterPast: Word('расчленяло', 7),
  pluralPast: Word('расчленяли', 7),
  imperativeInformal: Word('расчленяй', 7),
  imperativeFormal: Word('расчленяйте', 7),
  imperfect: [],
};

perfectVerbs.set(расчленять.name.text, расчленять);

export { расчленять };