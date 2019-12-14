import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расширять: PerfectVerb = {
  name: Word('расширять', 6),
  singular1stPerson: Word('расширяю', 6),
  singular2ndPerson: Word('расширяешь', 6),
  singular3rdPerson: Word('расширяет', 6),
  plural1stPerson: Word('расширяем', 6),
  plural2ndPerson: Word('расширяете', 6),
  plural3rdPerson: Word('расширяют', 6),
  masculinePast: Word('расширял', 6),
  femininePast: Word('расширяла', 6),
  neuterPast: Word('расширяло', 6),
  pluralPast: Word('расширяли', 6),
  imperativeInformal: Word('расширяй', 6),
  imperativeFormal: Word('расширяйте', 6),
  imperfect: ['расширить'],
};

perfectVerbs.set(расширять.name.text, расширять);

export { расширять };