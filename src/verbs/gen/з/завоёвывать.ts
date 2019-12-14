import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завоёвывать: PerfectVerb = {
  name: Word('завоёвывать', 1),
  singular1stPerson: Word('завоёвываю', 1),
  singular2ndPerson: Word('завоёвываешь', 1),
  singular3rdPerson: Word('завоёвывает', 1),
  plural1stPerson: Word('завоёвываем', 1),
  plural2ndPerson: Word('завоёвываете', 1),
  plural3rdPerson: Word('завоёвывают', 1),
  masculinePast: Word('завоёвывал', 1),
  femininePast: Word('завоёвывала', 1),
  neuterPast: Word('завоёвывало', 1),
  pluralPast: Word('завоёвывали', 1),
  imperativeInformal: Word('завоёвывай', 1),
  imperativeFormal: Word('завоёвывайте', 1),
  imperfect: [],
};

perfectVerbs.set(завоёвывать.name.text, завоёвывать);

export { завоёвывать };