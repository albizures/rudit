import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распаковывать: PerfectVerb = {
  name: Word('распаковывать', 6),
  singular1stPerson: Word('распаковываю', 6),
  singular2ndPerson: Word('распаковываешь', 6),
  singular3rdPerson: Word('распаковывает', 6),
  plural1stPerson: Word('распаковываем', 6),
  plural2ndPerson: Word('распаковываете', 6),
  plural3rdPerson: Word('распаковывают', 6),
  masculinePast: Word('распаковывал', 6),
  femininePast: Word('распаковывала', 6),
  neuterPast: Word('распаковывало', 6),
  pluralPast: Word('распаковывали', 6),
  imperativeInformal: Word('распаковывай', 6),
  imperativeFormal: Word('распаковывайте', 6),
  imperfect: [],
};

perfectVerbs.set(распаковывать.name.text, распаковывать);

export { распаковывать };