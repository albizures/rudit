import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const променять: PerfectVerb = {
  name: Word('променять', 6),
  singular1stPerson: Word('променяю', 6),
  singular2ndPerson: Word('променяешь', 6),
  singular3rdPerson: Word('променяет', 6),
  plural1stPerson: Word('променяем', 6),
  plural2ndPerson: Word('променяете', 6),
  plural3rdPerson: Word('променяют', 6),
  masculinePast: Word('променял', 6),
  femininePast: Word('променяла', 6),
  neuterPast: Word('променяло', 6),
  pluralPast: Word('променяли', 6),
  imperativeInformal: Word('променяй', 6),
  imperativeFormal: Word('променяйте', 6),
  imperfect: [],
};

perfectVerbs.set(променять.name.text, променять);

export { променять };