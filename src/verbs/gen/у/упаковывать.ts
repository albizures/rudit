import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упаковывать: PerfectVerb = {
  name: Word('упаковывать', 4),
  singular1stPerson: Word('упаковываю', 4),
  singular2ndPerson: Word('упаковываешь', 4),
  singular3rdPerson: Word('упаковывает', 4),
  plural1stPerson: Word('упаковываем', 4),
  plural2ndPerson: Word('упаковываете', 4),
  plural3rdPerson: Word('упаковывают', 4),
  masculinePast: Word('упаковывал', 4),
  femininePast: Word('упаковывала', 4),
  neuterPast: Word('упаковывало', 4),
  pluralPast: Word('упаковывали', 4),
  imperativeInformal: Word('упаковывай', 4),
  imperativeFormal: Word('упаковывайте', 4),
  imperfect: [],
};

perfectVerbs.set(упаковывать.name.text, упаковывать);

export { упаковывать };