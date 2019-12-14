import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрастывать: PerfectVerb = {
  name: Word('выпрастывать', 4),
  singular1stPerson: Word('выпрастываю', 4),
  singular2ndPerson: Word('выпрастываешь', 4),
  singular3rdPerson: Word('выпрастывает', 4),
  plural1stPerson: Word('выпрастываем', 4),
  plural2ndPerson: Word('выпрастываете', 4),
  plural3rdPerson: Word('выпрастывают', 4),
  masculinePast: Word('выпрастывал', 4),
  femininePast: Word('выпрастывала', 4),
  neuterPast: Word('выпрастывало', 4),
  pluralPast: Word('выпрастывали', 4),
  imperativeInformal: Word('выпрастывай', 4),
  imperativeFormal: Word('выпрастывайте', 4),
  imperfect: [],
};

perfectVerbs.set(выпрастывать.name.text, выпрастывать);

export { выпрастывать };