import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережёвывать: PerfectVerb = {
  name: Word('пережёвывать', 9),
  singular1stPerson: Word('пережёвываю', 9),
  singular2ndPerson: Word('пережёвываешь', 9),
  singular3rdPerson: Word('пережёвывает', 9),
  plural1stPerson: Word('пережёвываем', 9),
  plural2ndPerson: Word('пережёвываете', 9),
  plural3rdPerson: Word('пережёвывают', 9),
  masculinePast: Word('пережёвывал', 9),
  femininePast: Word('пережёвывала', 9),
  neuterPast: Word('пережёвывало', 9),
  pluralPast: Word('пережёвывали', 9),
  imperativeInformal: Word('пережёвывай', 9),
  imperativeFormal: Word('пережёвывайте', 9),
  imperfect: [],
};

perfectVerbs.set(пережёвывать.name.text, пережёвывать);

export { пережёвывать };