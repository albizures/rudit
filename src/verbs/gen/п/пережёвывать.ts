import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережёвывать: PerfectVerb = {
  name: Word('пережёвывать', 5),
  singular1stPerson: Word('пережёвываю', 5),
  singular2ndPerson: Word('пережёвываешь', 5),
  singular3rdPerson: Word('пережёвывает', 5),
  plural1stPerson: Word('пережёвываем', 5),
  plural2ndPerson: Word('пережёвываете', 5),
  plural3rdPerson: Word('пережёвывают', 5),
  masculinePast: Word('пережёвывал', 5),
  femininePast: Word('пережёвывала', 5),
  neuterPast: Word('пережёвывало', 5),
  pluralPast: Word('пережёвывали', 5),
  imperativeInformal: Word('пережёвывай', 5),
  imperativeFormal: Word('пережёвывайте', 5),
  imperfect: [],
};

perfectVerbs.set(пережёвывать.name.text, пережёвывать);

export { пережёвывать };