import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосчитывать: PerfectVerb = {
  name: Word('сосчитывать', 4),
  singular1stPerson: Word('сосчитываю', 4),
  singular2ndPerson: Word('сосчитываешь', 4),
  singular3rdPerson: Word('сосчитывает', 4),
  plural1stPerson: Word('сосчитываем', 4),
  plural2ndPerson: Word('сосчитываете', 4),
  plural3rdPerson: Word('сосчитывают', 4),
  masculinePast: Word('сосчитывал', 4),
  femininePast: Word('сосчитывала', 4),
  neuterPast: Word('сосчитывало', 4),
  pluralPast: Word('сосчитывали', 4),
  imperativeInformal: Word('сосчитывай', 4),
  imperativeFormal: Word('сосчитывайте', 4),
  imperfect: [],
};

perfectVerbs.set(сосчитывать.name.text, сосчитывать);

export { сосчитывать };