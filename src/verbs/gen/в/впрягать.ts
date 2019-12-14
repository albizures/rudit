import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впрягать: PerfectVerb = {
  name: Word('впрягать', 5),
  singular1stPerson: Word('впрягаю', 5),
  singular2ndPerson: Word('впрягаешь', 5),
  singular3rdPerson: Word('впрягает', 5),
  plural1stPerson: Word('впрягаем', 5),
  plural2ndPerson: Word('впрягаете', 5),
  plural3rdPerson: Word('впрягают', 5),
  masculinePast: Word('впрягал', 5),
  femininePast: Word('впрягала', 5),
  neuterPast: Word('впрягало', 5),
  pluralPast: Word('впрягали', 5),
  imperativeInformal: Word('впрягай', 5),
  imperativeFormal: Word('впрягайте', 5),
  imperfect: [],
};

perfectVerbs.set(впрягать.name.text, впрягать);

export { впрягать };