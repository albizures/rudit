import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспитывать: PerfectVerb = {
  name: Word('воспитывать', 4),
  singular1stPerson: Word('воспитываю', 4),
  singular2ndPerson: Word('воспитываешь', 4),
  singular3rdPerson: Word('воспитывает', 4),
  plural1stPerson: Word('воспитываем', 4),
  plural2ndPerson: Word('воспитываете', 4),
  plural3rdPerson: Word('воспитывают', 4),
  masculinePast: Word('воспитывал', 4),
  femininePast: Word('воспитывала', 4),
  neuterPast: Word('воспитывало', 4),
  pluralPast: Word('воспитывали', 4),
  imperativeInformal: Word('воспитывай', 4),
  imperativeFormal: Word('воспитывайте', 4),
  imperfect: ['воспитать'],
};

perfectVerbs.set(воспитывать.name.text, воспитывать);

export { воспитывать };