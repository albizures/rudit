import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвоёвывать: PerfectVerb = {
  name: Word('отвоёвывать', 4),
  singular1stPerson: Word('отвоёвываю', 4),
  singular2ndPerson: Word('отвоёвываешь', 4),
  singular3rdPerson: Word('отвоёвывает', 4),
  plural1stPerson: Word('отвоёвываем', 4),
  plural2ndPerson: Word('отвоёвываете', 4),
  plural3rdPerson: Word('отвоёвывают', 4),
  masculinePast: Word('отвоёвывал', 4),
  femininePast: Word('отвоёвывала', 4),
  neuterPast: Word('отвоёвывало', 4),
  pluralPast: Word('отвоёвывали', 4),
  imperativeInformal: Word('отвоёвывай', 4),
  imperativeFormal: Word('отвоёвывайте', 4),
  imperfect: [],
};

perfectVerbs.set(отвоёвывать.name.text, отвоёвывать);

export { отвоёвывать };