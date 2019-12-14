import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привыкать: PerfectVerb = {
  name: Word('привыкать', 6),
  singular1stPerson: Word('привыкаю', 6),
  singular2ndPerson: Word('привыкаешь', 6),
  singular3rdPerson: Word('привыкает', 6),
  plural1stPerson: Word('привыкаем', 6),
  plural2ndPerson: Word('привыкаете', 6),
  plural3rdPerson: Word('привыкают', 6),
  masculinePast: Word('привыкал', 6),
  femininePast: Word('привыкала', 6),
  neuterPast: Word('привыкало', 6),
  pluralPast: Word('привыкали', 6),
  imperativeInformal: Word('привыкай', 6),
  imperativeFormal: Word('привыкайте', 6),
  imperfect: ['привыкнуть'],
};

perfectVerbs.set(привыкать.name.text, привыкать);

export { привыкать };