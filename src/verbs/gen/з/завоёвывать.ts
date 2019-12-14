import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завоёвывать: PerfectVerb = {
  name: Word('завоёвывать', 4),
  singular1stPerson: Word('завоёвываю', 4),
  singular2ndPerson: Word('завоёвываешь', 4),
  singular3rdPerson: Word('завоёвывает', 4),
  plural1stPerson: Word('завоёвываем', 4),
  plural2ndPerson: Word('завоёвываете', 4),
  plural3rdPerson: Word('завоёвывают', 4),
  masculinePast: Word('завоёвывал', 4),
  femininePast: Word('завоёвывала', 4),
  neuterPast: Word('завоёвывало', 4),
  pluralPast: Word('завоёвывали', 4),
  imperativeInformal: Word('завоёвывай', 4),
  imperativeFormal: Word('завоёвывайте', 4),
  imperfect: [],
};

perfectVerbs.set(завоёвывать.name.text, завоёвывать);

export { завоёвывать };