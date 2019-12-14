import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щеголять: PerfectVerb = {
  name: Word('щеголять', 5),
  singular1stPerson: Word('щеголяю', 5),
  singular2ndPerson: Word('щеголяешь', 5),
  singular3rdPerson: Word('щеголяет', 5),
  plural1stPerson: Word('щеголяем', 5),
  plural2ndPerson: Word('щеголяете', 5),
  plural3rdPerson: Word('щеголяют', 5),
  masculinePast: Word('щеголял', 5),
  femininePast: Word('щеголяла', 5),
  neuterPast: Word('щеголяло', 5),
  pluralPast: Word('щеголяли', 5),
  imperativeInformal: Word('щеголяй', 5),
  imperativeFormal: Word('щеголяйте', 5),
  imperfect: [],
};

perfectVerbs.set(щеголять.name.text, щеголять);

export { щеголять };