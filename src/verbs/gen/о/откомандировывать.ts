import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откомандировывать: PerfectVerb = {
  name: Word('откомандировывать', 10),
  singular1stPerson: Word('откомандировываю', 10),
  singular2ndPerson: Word('откомандировываешь', 10),
  singular3rdPerson: Word('откомандировывает', 10),
  plural1stPerson: Word('откомандировываем', 10),
  plural2ndPerson: Word('откомандировываете', 10),
  plural3rdPerson: Word('откомандировывают', 10),
  masculinePast: Word('откомандировывал', 10),
  femininePast: Word('откомандировывала', 10),
  neuterPast: Word('откомандировывало', 10),
  pluralPast: Word('откомандировывали', 10),
  imperativeInformal: Word('откомандировывай', 10),
  imperativeFormal: Word('откомандировывайте', 10),
  imperfect: [],
};

perfectVerbs.set(откомандировывать.name.text, откомандировывать);

export { откомандировывать };