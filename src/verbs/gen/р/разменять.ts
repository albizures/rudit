import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разменять: PerfectVerb = {
  name: Word('разменять', 6),
  singular1stPerson: Word('разменяю', 6),
  singular2ndPerson: Word('разменяешь', 6),
  singular3rdPerson: Word('разменяет', 6),
  plural1stPerson: Word('разменяем', 6),
  plural2ndPerson: Word('разменяете', 6),
  plural3rdPerson: Word('разменяют', 6),
  masculinePast: Word('разменял', 6),
  femininePast: Word('разменяла', 6),
  neuterPast: Word('разменяло', 6),
  pluralPast: Word('разменяли', 6),
  imperativeInformal: Word('разменяй', 6),
  imperativeFormal: Word('разменяйте', 6),
  imperfect: [],
};

perfectVerbs.set(разменять.name.text, разменять);

export { разменять };