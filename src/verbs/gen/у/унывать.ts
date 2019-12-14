import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унывать: PerfectVerb = {
  name: Word('унывать', 4),
  singular1stPerson: Word('унываю', 4),
  singular2ndPerson: Word('унываешь', 4),
  singular3rdPerson: Word('унывает', 4),
  plural1stPerson: Word('унываем', 4),
  plural2ndPerson: Word('унываете', 4),
  plural3rdPerson: Word('унывают', 4),
  masculinePast: Word('унывал', 4),
  femininePast: Word('унывала', 4),
  neuterPast: Word('унывало', 4),
  pluralPast: Word('унывали', 4),
  imperativeInformal: Word('унывай', 4),
  imperativeFormal: Word('унывайте', 4),
  imperfect: [],
};

perfectVerbs.set(унывать.name.text, унывать);

export { унывать };