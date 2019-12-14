import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замыкать: PerfectVerb = {
  name: Word('замыкать', 5),
  singular1stPerson: Word('замыкаю', 5),
  singular2ndPerson: Word('замыкаешь', 5),
  singular3rdPerson: Word('замыкает', 5),
  plural1stPerson: Word('замыкаем', 5),
  plural2ndPerson: Word('замыкаете', 5),
  plural3rdPerson: Word('замыкают', 5),
  masculinePast: Word('замыкал', 5),
  femininePast: Word('замыкала', 5),
  neuterPast: Word('замыкало', 5),
  pluralPast: Word('замыкали', 5),
  imperativeInformal: Word('замыкай', 5),
  imperativeFormal: Word('замыкайте', 5),
  imperfect: [],
};

perfectVerbs.set(замыкать.name.text, замыкать);

export { замыкать };