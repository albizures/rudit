import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочёсывать: PerfectVerb = {
  name: Word('прочёсывать', 4),
  singular1stPerson: Word('прочёсываю', 4),
  singular2ndPerson: Word('прочёсываешь', 4),
  singular3rdPerson: Word('прочёсывает', 4),
  plural1stPerson: Word('прочёсываем', 4),
  plural2ndPerson: Word('прочёсываете', 4),
  plural3rdPerson: Word('прочёсывают', 4),
  masculinePast: Word('прочёсывал', 4),
  femininePast: Word('прочёсывала', 4),
  neuterPast: Word('прочёсывало', 4),
  pluralPast: Word('прочёсывали', 4),
  imperativeInformal: Word('прочёсывай', 4),
  imperativeFormal: Word('прочёсывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прочёсывать.name.text, прочёсывать);

export { прочёсывать };