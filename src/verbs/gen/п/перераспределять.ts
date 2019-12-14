import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перераспределять: PerfectVerb = {
  name: Word('перераспределять', 13),
  singular1stPerson: Word('перераспределяю', 13),
  singular2ndPerson: Word('перераспределяешь', 13),
  singular3rdPerson: Word('перераспределяет', 13),
  plural1stPerson: Word('перераспределяем', 13),
  plural2ndPerson: Word('перераспределяете', 13),
  plural3rdPerson: Word('перераспределяют', 13),
  masculinePast: Word('перераспределял', 13),
  femininePast: Word('перераспределяла', 13),
  neuterPast: Word('перераспределяло', 13),
  pluralPast: Word('перераспределяли', 13),
  imperativeInformal: Word('перераспределяй', 13),
  imperativeFormal: Word('перераспределяйте', 13),
  imperfect: [],
};

perfectVerbs.set(перераспределять.name.text, перераспределять);

export { перераспределять };