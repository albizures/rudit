import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убывать: PerfectVerb = {
  name: Word('убывать', 4),
  singular1stPerson: Word('убываю', 4),
  singular2ndPerson: Word('убываешь', 4),
  singular3rdPerson: Word('убывает', 4),
  plural1stPerson: Word('убываем', 4),
  plural2ndPerson: Word('убываете', 4),
  plural3rdPerson: Word('убывают', 4),
  masculinePast: Word('убывал', 4),
  femininePast: Word('убывала', 4),
  neuterPast: Word('убывало', 4),
  pluralPast: Word('убывали', 4),
  imperativeInformal: Word('убывай', 4),
  imperativeFormal: Word('убывайте', 4),
  imperfect: [],
};

perfectVerbs.set(убывать.name.text, убывать);

export { убывать };