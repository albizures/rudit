import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const населять: PerfectVerb = {
  name: Word('населять', 5),
  singular1stPerson: Word('населяю', 5),
  singular2ndPerson: Word('населяешь', 5),
  singular3rdPerson: Word('населяет', 5),
  plural1stPerson: Word('населяем', 5),
  plural2ndPerson: Word('населяете', 5),
  plural3rdPerson: Word('населяют', 5),
  masculinePast: Word('населял', 5),
  femininePast: Word('населяла', 5),
  neuterPast: Word('населяло', 5),
  pluralPast: Word('населяли', 5),
  imperativeInformal: Word('населяй', 5),
  imperativeFormal: Word('населяйте', 5),
  imperfect: ['населить'],
};

perfectVerbs.set(населять.name.text, населять);

export { населять };