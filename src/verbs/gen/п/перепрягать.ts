import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепрягать: PerfectVerb = {
  name: Word('перепрягать', 8),
  singular1stPerson: Word('перепрягаю', 8),
  singular2ndPerson: Word('перепрягаешь', 8),
  singular3rdPerson: Word('перепрягает', 8),
  plural1stPerson: Word('перепрягаем', 8),
  plural2ndPerson: Word('перепрягаете', 8),
  plural3rdPerson: Word('перепрягают', 8),
  masculinePast: Word('перепрягал', 8),
  femininePast: Word('перепрягала', 8),
  neuterPast: Word('перепрягало', 8),
  pluralPast: Word('перепрягали', 8),
  imperativeInformal: Word('перепрягай', 8),
  imperativeFormal: Word('перепрягайте', 8),
  imperfect: [],
};

perfectVerbs.set(перепрягать.name.text, перепрягать);

export { перепрягать };