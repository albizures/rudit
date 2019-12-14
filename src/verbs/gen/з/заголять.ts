import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заголять: PerfectVerb = {
  name: Word('заголять', 5),
  singular1stPerson: Word('заголяю', 5),
  singular2ndPerson: Word('заголяешь', 5),
  singular3rdPerson: Word('заголяет', 5),
  plural1stPerson: Word('заголяем', 5),
  plural2ndPerson: Word('заголяете', 5),
  plural3rdPerson: Word('заголяют', 5),
  masculinePast: Word('заголял', 5),
  femininePast: Word('заголяла', 5),
  neuterPast: Word('заголяло', 5),
  pluralPast: Word('заголяли', 5),
  imperativeInformal: Word('заголяй', 5),
  imperativeFormal: Word('заголяйте', 5),
  imperfect: [],
};

perfectVerbs.set(заголять.name.text, заголять);

export { заголять };