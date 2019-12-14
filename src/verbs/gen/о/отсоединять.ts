import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсоединять: PerfectVerb = {
  name: Word('отсоединять', 8),
  singular1stPerson: Word('отсоединяю', 8),
  singular2ndPerson: Word('отсоединяешь', 8),
  singular3rdPerson: Word('отсоединяет', 8),
  plural1stPerson: Word('отсоединяем', 8),
  plural2ndPerson: Word('отсоединяете', 8),
  plural3rdPerson: Word('отсоединяют', 8),
  masculinePast: Word('отсоединял', 8),
  femininePast: Word('отсоединяла', 8),
  neuterPast: Word('отсоединяло', 8),
  pluralPast: Word('отсоединяли', 8),
  imperativeInformal: Word('отсоединяй', 8),
  imperativeFormal: Word('отсоединяйте', 8),
  imperfect: [],
};

perfectVerbs.set(отсоединять.name.text, отсоединять);

export { отсоединять };