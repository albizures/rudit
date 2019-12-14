import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подразделять: PerfectVerb = {
  name: Word('подразделять', 9),
  singular1stPerson: Word('подразделяю', 9),
  singular2ndPerson: Word('подразделяешь', 9),
  singular3rdPerson: Word('подразделяет', 9),
  plural1stPerson: Word('подразделяем', 9),
  plural2ndPerson: Word('подразделяете', 9),
  plural3rdPerson: Word('подразделяют', 9),
  masculinePast: Word('подразделял', 9),
  femininePast: Word('подразделяла', 9),
  neuterPast: Word('подразделяло', 9),
  pluralPast: Word('подразделяли', 9),
  imperativeInformal: Word('подразделяй', 9),
  imperativeFormal: Word('подразделяйте', 9),
  imperfect: [],
};

perfectVerbs.set(подразделять.name.text, подразделять);

export { подразделять };