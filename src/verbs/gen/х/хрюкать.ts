import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хрюкать: PerfectVerb = {
  name: Word('хрюкать', 2),
  singular1stPerson: Word('хрюкаю', 2),
  singular2ndPerson: Word('хрюкаешь', 2),
  singular3rdPerson: Word('хрюкает', 2),
  plural1stPerson: Word('хрюкаем', 2),
  plural2ndPerson: Word('хрюкаете', 2),
  plural3rdPerson: Word('хрюкают', 2),
  masculinePast: Word('хрюкал', 2),
  femininePast: Word('хрюкала', 2),
  neuterPast: Word('хрюкало', 2),
  pluralPast: Word('хрюкали', 2),
  imperativeInformal: Word('хрюкай', 2),
  imperativeFormal: Word('хрюкайте', 2),
  imperfect: ['хрюкнуть'],
};

perfectVerbs.set(хрюкать.name.text, хрюкать);

export { хрюкать };