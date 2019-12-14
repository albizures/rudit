import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гавкать: PerfectVerb = {
  name: Word('гавкать', 1),
  singular1stPerson: Word('гавкаю', 1),
  singular2ndPerson: Word('гавкаешь', 1),
  singular3rdPerson: Word('гавкает', 1),
  plural1stPerson: Word('гавкаем', 1),
  plural2ndPerson: Word('гавкаете', 1),
  plural3rdPerson: Word('гавкают', 1),
  masculinePast: Word('гавкал', 1),
  femininePast: Word('гавкала', 1),
  neuterPast: Word('гавкало', 1),
  pluralPast: Word('гавкали', 1),
  imperativeInformal: Word('гавкай', 1),
  imperativeFormal: Word('гавкайте', 1),
  imperfect: ['гавкнуть'],
};

perfectVerbs.set(гавкать.name.text, гавкать);

export { гавкать };