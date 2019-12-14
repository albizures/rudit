import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссужать: PerfectVerb = {
  name: Word('ссужать', 4),
  singular1stPerson: Word('ссужаю', 4),
  singular2ndPerson: Word('ссужаешь', 4),
  singular3rdPerson: Word('ссужает', 4),
  plural1stPerson: Word('ссужаем', 4),
  plural2ndPerson: Word('ссужаете', 4),
  plural3rdPerson: Word('ссужают', 4),
  masculinePast: Word('ссужал', 4),
  femininePast: Word('ссужала', 4),
  neuterPast: Word('ссужало', 4),
  pluralPast: Word('ссужали', 4),
  imperativeInformal: Word('ссужай', 4),
  imperativeFormal: Word('ссужайте', 4),
  imperfect: [],
};

perfectVerbs.set(ссужать.name.text, ссужать);

export { ссужать };