import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облизывать: PerfectVerb = {
  name: Word('облизывать', 3),
  singular1stPerson: Word('облизываю', 3),
  singular2ndPerson: Word('облизываешь', 3),
  singular3rdPerson: Word('облизывает', 3),
  plural1stPerson: Word('облизываем', 3),
  plural2ndPerson: Word('облизываете', 3),
  plural3rdPerson: Word('облизывают', 3),
  masculinePast: Word('облизывал', 3),
  femininePast: Word('облизывала', 3),
  neuterPast: Word('облизывало', 3),
  pluralPast: Word('облизывали', 3),
  imperativeInformal: Word('облизывай', 3),
  imperativeFormal: Word('облизывайте', 3),
  imperfect: [],
};

perfectVerbs.set(облизывать.name.text, облизывать);

export { облизывать };