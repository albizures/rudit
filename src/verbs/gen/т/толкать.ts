import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толкать: PerfectVerb = {
  name: Word('толкать', 4),
  singular1stPerson: Word('толкаю', 4),
  singular2ndPerson: Word('толкаешь', 4),
  singular3rdPerson: Word('толкает', 4),
  plural1stPerson: Word('толкаем', 4),
  plural2ndPerson: Word('толкаете', 4),
  plural3rdPerson: Word('толкают', 4),
  masculinePast: Word('толкал', 4),
  femininePast: Word('толкала', 4),
  neuterPast: Word('толкало', 4),
  pluralPast: Word('толкали', 4),
  imperativeInformal: Word('толкай', 4),
  imperativeFormal: Word('толкайте', 4),
  imperfect: ['толкнуть'],
};

perfectVerbs.set(толкать.name.text, толкать);

export { толкать };