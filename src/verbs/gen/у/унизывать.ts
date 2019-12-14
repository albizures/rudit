import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унизывать: PerfectVerb = {
  name: Word('унизывать', 2),
  singular1stPerson: Word('унизываю', 2),
  singular2ndPerson: Word('унизываешь', 2),
  singular3rdPerson: Word('унизывает', 2),
  plural1stPerson: Word('унизываем', 2),
  plural2ndPerson: Word('унизываете', 2),
  plural3rdPerson: Word('унизывают', 2),
  masculinePast: Word('унизывал', 2),
  femininePast: Word('унизывала', 2),
  neuterPast: Word('унизывало', 2),
  pluralPast: Word('унизывали', 2),
  imperativeInformal: Word('унизывай', 2),
  imperativeFormal: Word('унизывайте', 2),
  imperfect: [],
};

perfectVerbs.set(унизывать.name.text, унизывать);

export { унизывать };