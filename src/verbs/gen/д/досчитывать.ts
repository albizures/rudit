import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досчитывать: PerfectVerb = {
  name: Word('досчитывать', 4),
  singular1stPerson: Word('досчитываю', 4),
  singular2ndPerson: Word('досчитываешь', 4),
  singular3rdPerson: Word('досчитывает', 4),
  plural1stPerson: Word('досчитываем', 4),
  plural2ndPerson: Word('досчитываете', 4),
  plural3rdPerson: Word('досчитывают', 4),
  masculinePast: Word('досчитывал', 4),
  femininePast: Word('досчитывала', 4),
  neuterPast: Word('досчитывало', 4),
  pluralPast: Word('досчитывали', 4),
  imperativeInformal: Word('досчитывай', 4),
  imperativeFormal: Word('досчитывайте', 4),
  imperfect: [],
};

perfectVerbs.set(досчитывать.name.text, досчитывать);

export { досчитывать };