import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозябать: PerfectVerb = {
  name: Word('прозябать', 6),
  singular1stPerson: Word('прозябаю', 6),
  singular2ndPerson: Word('прозябаешь', 6),
  singular3rdPerson: Word('прозябает', 6),
  plural1stPerson: Word('прозябаем', 6),
  plural2ndPerson: Word('прозябаете', 6),
  plural3rdPerson: Word('прозябают', 6),
  masculinePast: Word('прозябал', 6),
  femininePast: Word('прозябала', 6),
  neuterPast: Word('прозябало', 6),
  pluralPast: Word('прозябали', 6),
  imperativeInformal: Word('прозябай', 6),
  imperativeFormal: Word('прозябайте', 6),
  imperfect: [],
};

perfectVerbs.set(прозябать.name.text, прозябать);

export { прозябать };