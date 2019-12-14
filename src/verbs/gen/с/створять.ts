import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const створять: PerfectVerb = {
  name: Word('створять', 5),
  singular1stPerson: Word('створяю', 5),
  singular2ndPerson: Word('створяешь', 5),
  singular3rdPerson: Word('створяет', 5),
  plural1stPerson: Word('створяем', 5),
  plural2ndPerson: Word('створяете', 5),
  plural3rdPerson: Word('створяют', 5),
  masculinePast: Word('створял', 5),
  femininePast: Word('створяла', 5),
  neuterPast: Word('створяло', 5),
  pluralPast: Word('створяли', 5),
  imperativeInformal: Word('створяй', 5),
  imperativeFormal: Word('створяйте', 5),
  imperfect: [],
};

perfectVerbs.set(створять.name.text, створять);

export { створять };