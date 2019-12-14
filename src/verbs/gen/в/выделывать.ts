import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выделывать: PerfectVerb = {
  name: Word('выделывать', 3),
  singular1stPerson: Word('выделываю', 3),
  singular2ndPerson: Word('выделываешь', 3),
  singular3rdPerson: Word('выделывает', 3),
  plural1stPerson: Word('выделываем', 3),
  plural2ndPerson: Word('выделываете', 3),
  plural3rdPerson: Word('выделывают', 3),
  masculinePast: Word('выделывал', 3),
  femininePast: Word('выделывала', 3),
  neuterPast: Word('выделывало', 3),
  pluralPast: Word('выделывали', 3),
  imperativeInformal: Word('выделывай', 3),
  imperativeFormal: Word('выделывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выделывать.name.text, выделывать);

export { выделывать };