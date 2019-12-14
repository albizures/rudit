import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сверкать: PerfectVerb = {
  name: Word('сверкать', 5),
  singular1stPerson: Word('сверкаю', 5),
  singular2ndPerson: Word('сверкаешь', 5),
  singular3rdPerson: Word('сверкает', 5),
  plural1stPerson: Word('сверкаем', 5),
  plural2ndPerson: Word('сверкаете', 5),
  plural3rdPerson: Word('сверкают', 5),
  masculinePast: Word('сверкал', 5),
  femininePast: Word('сверкала', 5),
  neuterPast: Word('сверкало', 5),
  pluralPast: Word('сверкали', 5),
  imperativeInformal: Word('сверкай', 5),
  imperativeFormal: Word('сверкайте', 5),
  imperfect: ['сверкнуть'],
};

perfectVerbs.set(сверкать.name.text, сверкать);

export { сверкать };