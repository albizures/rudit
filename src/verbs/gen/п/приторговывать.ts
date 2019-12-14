import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приторговывать: PerfectVerb = {
  name: Word('приторговывать', 7),
  singular1stPerson: Word('приторговываю', 7),
  singular2ndPerson: Word('приторговываешь', 7),
  singular3rdPerson: Word('приторговывает', 7),
  plural1stPerson: Word('приторговываем', 7),
  plural2ndPerson: Word('приторговываете', 7),
  plural3rdPerson: Word('приторговывают', 7),
  masculinePast: Word('приторговывал', 7),
  femininePast: Word('приторговывала', 7),
  neuterPast: Word('приторговывало', 7),
  pluralPast: Word('приторговывали', 7),
  imperativeInformal: Word('приторговывай', 7),
  imperativeFormal: Word('приторговывайте', 7),
  imperfect: [],
};

perfectVerbs.set(приторговывать.name.text, приторговывать);

export { приторговывать };