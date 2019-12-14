import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распрягать: PerfectVerb = {
  name: Word('распрягать', 7),
  singular1stPerson: Word('распрягаю', 7),
  singular2ndPerson: Word('распрягаешь', 7),
  singular3rdPerson: Word('распрягает', 7),
  plural1stPerson: Word('распрягаем', 7),
  plural2ndPerson: Word('распрягаете', 7),
  plural3rdPerson: Word('распрягают', 7),
  masculinePast: Word('распрягал', 7),
  femininePast: Word('распрягала', 7),
  neuterPast: Word('распрягало', 7),
  pluralPast: Word('распрягали', 7),
  imperativeInformal: Word('распрягай', 7),
  imperativeFormal: Word('распрягайте', 7),
  imperfect: [],
};

perfectVerbs.set(распрягать.name.text, распрягать);

export { распрягать };