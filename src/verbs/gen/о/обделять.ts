import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обделять: PerfectVerb = {
  name: Word('обделять', 5),
  singular1stPerson: Word('обделяю', 5),
  singular2ndPerson: Word('обделяешь', 5),
  singular3rdPerson: Word('обделяет', 5),
  plural1stPerson: Word('обделяем', 5),
  plural2ndPerson: Word('обделяете', 5),
  plural3rdPerson: Word('обделяют', 5),
  masculinePast: Word('обделял', 5),
  femininePast: Word('обделяла', 5),
  neuterPast: Word('обделяло', 5),
  pluralPast: Word('обделяли', 5),
  imperativeInformal: Word('обделяй', 5),
  imperativeFormal: Word('обделяйте', 5),
  imperfect: [],
};

perfectVerbs.set(обделять.name.text, обделять);

export { обделять };