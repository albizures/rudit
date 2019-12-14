import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочёсывать: PerfectVerb = {
  name: Word('прочёсывать', 8),
  singular1stPerson: Word('прочёсываю', 8),
  singular2ndPerson: Word('прочёсываешь', 8),
  singular3rdPerson: Word('прочёсывает', 8),
  plural1stPerson: Word('прочёсываем', 8),
  plural2ndPerson: Word('прочёсываете', 8),
  plural3rdPerson: Word('прочёсывают', 8),
  masculinePast: Word('прочёсывал', 8),
  femininePast: Word('прочёсывала', 8),
  neuterPast: Word('прочёсывало', 8),
  pluralPast: Word('прочёсывали', 8),
  imperativeInformal: Word('прочёсывай', 8),
  imperativeFormal: Word('прочёсывайте', 8),
  imperfect: [],
};

perfectVerbs.set(прочёсывать.name.text, прочёсывать);

export { прочёсывать };