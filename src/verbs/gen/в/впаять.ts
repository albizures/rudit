import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впаять: PerfectVerb = {
  name: Word('впаять', 3),
  singular1stPerson: Word('впаяю', 3),
  singular2ndPerson: Word('впаяешь', 3),
  singular3rdPerson: Word('впаяет', 3),
  plural1stPerson: Word('впаяем', 3),
  plural2ndPerson: Word('впаяете', 3),
  plural3rdPerson: Word('впаяют', 3),
  masculinePast: Word('впаял', 3),
  femininePast: Word('впаяла', 3),
  neuterPast: Word('впаяло', 3),
  pluralPast: Word('впаяли', 3),
  imperativeInformal: Word('впаяй', 3),
  imperativeFormal: Word('впаяйте', 3),
  imperfect: [],
};

perfectVerbs.set(впаять.name.text, впаять);

export { впаять };