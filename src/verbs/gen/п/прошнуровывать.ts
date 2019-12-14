import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошнуровывать: PerfectVerb = {
  name: Word('прошнуровывать', 7),
  singular1stPerson: Word('прошнуровываю', 7),
  singular2ndPerson: Word('прошнуровываешь', 7),
  singular3rdPerson: Word('прошнуровывает', 7),
  plural1stPerson: Word('прошнуровываем', 7),
  plural2ndPerson: Word('прошнуровываете', 7),
  plural3rdPerson: Word('прошнуровывают', 7),
  masculinePast: Word('прошнуровывал', 7),
  femininePast: Word('прошнуровывала', 7),
  neuterPast: Word('прошнуровывало', 7),
  pluralPast: Word('прошнуровывали', 7),
  imperativeInformal: Word('прошнуровывай', 7),
  imperativeFormal: Word('прошнуровывайте', 7),
  imperfect: [],
};

perfectVerbs.set(прошнуровывать.name.text, прошнуровывать);

export { прошнуровывать };