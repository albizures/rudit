import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глотать: PerfectVerb = {
  name: Word('глотать', 4),
  singular1stPerson: Word('глотаю', 4),
  singular2ndPerson: Word('глотаешь', 4),
  singular3rdPerson: Word('глотает', 4),
  plural1stPerson: Word('глотаем', 4),
  plural2ndPerson: Word('глотаете', 4),
  plural3rdPerson: Word('глотают', 4),
  masculinePast: Word('глотал', 4),
  femininePast: Word('глотала', 4),
  neuterPast: Word('глотало', 4),
  pluralPast: Word('глотали', 4),
  imperativeInformal: Word('глотай', 4),
  imperativeFormal: Word('глотайте', 4),
  imperfect: ['глотнуть','проглотить'],
};

perfectVerbs.set(глотать.name.text, глотать);

export { глотать };