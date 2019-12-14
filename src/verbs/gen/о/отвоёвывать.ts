import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвоёвывать: PerfectVerb = {
  name: Word('отвоёвывать', 8),
  singular1stPerson: Word('отвоёвываю', 8),
  singular2ndPerson: Word('отвоёвываешь', 8),
  singular3rdPerson: Word('отвоёвывает', 8),
  plural1stPerson: Word('отвоёвываем', 8),
  plural2ndPerson: Word('отвоёвываете', 8),
  plural3rdPerson: Word('отвоёвывают', 8),
  masculinePast: Word('отвоёвывал', 8),
  femininePast: Word('отвоёвывала', 8),
  neuterPast: Word('отвоёвывало', 8),
  pluralPast: Word('отвоёвывали', 8),
  imperativeInformal: Word('отвоёвывай', 8),
  imperativeFormal: Word('отвоёвывайте', 8),
  imperfect: [],
};

perfectVerbs.set(отвоёвывать.name.text, отвоёвывать);

export { отвоёвывать };