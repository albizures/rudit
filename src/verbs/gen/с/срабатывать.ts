import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срабатывать: PerfectVerb = {
  name: Word('срабатывать', 4),
  singular1stPerson: Word('срабатываю', 4),
  singular2ndPerson: Word('срабатываешь', 4),
  singular3rdPerson: Word('срабатывает', 4),
  plural1stPerson: Word('срабатываем', 4),
  plural2ndPerson: Word('срабатываете', 4),
  plural3rdPerson: Word('срабатывают', 4),
  masculinePast: Word('срабатывал', 4),
  femininePast: Word('срабатывала', 4),
  neuterPast: Word('срабатывало', 4),
  pluralPast: Word('срабатывали', 4),
  imperativeInformal: Word('срабатывай', 4),
  imperativeFormal: Word('срабатывайте', 4),
  imperfect: [],
};

perfectVerbs.set(срабатывать.name.text, срабатывать);

export { срабатывать };