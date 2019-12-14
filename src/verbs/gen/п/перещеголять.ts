import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перещеголять: PerfectVerb = {
  name: Word('перещеголять', 9),
  singular1stPerson: Word('перещеголяю', 9),
  singular2ndPerson: Word('перещеголяешь', 9),
  singular3rdPerson: Word('перещеголяет', 9),
  plural1stPerson: Word('перещеголяем', 9),
  plural2ndPerson: Word('перещеголяете', 9),
  plural3rdPerson: Word('перещеголяют', 9),
  masculinePast: Word('перещеголял', 9),
  femininePast: Word('перещеголяла', 9),
  neuterPast: Word('перещеголяло', 9),
  pluralPast: Word('перещеголяли', 9),
  imperativeInformal: Word('перещеголяй', 9),
  imperativeFormal: Word('перещеголяйте', 9),
  imperfect: [],
};

perfectVerbs.set(перещеголять.name.text, перещеголять);

export { перещеголять };