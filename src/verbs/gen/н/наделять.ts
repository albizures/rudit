import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наделять: PerfectVerb = {
  name: Word('наделять', 5),
  singular1stPerson: Word('наделяю', 5),
  singular2ndPerson: Word('наделяешь', 5),
  singular3rdPerson: Word('наделяет', 5),
  plural1stPerson: Word('наделяем', 5),
  plural2ndPerson: Word('наделяете', 5),
  plural3rdPerson: Word('наделяют', 5),
  masculinePast: Word('наделял', 5),
  femininePast: Word('наделяла', 5),
  neuterPast: Word('наделяло', 5),
  pluralPast: Word('наделяли', 5),
  imperativeInformal: Word('наделяй', 5),
  imperativeFormal: Word('наделяйте', 5),
  imperfect: [],
};

perfectVerbs.set(наделять.name.text, наделять);

export { наделять };