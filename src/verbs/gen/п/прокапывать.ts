import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокапывать: PerfectVerb = {
  name: Word('прокапывать', 4),
  singular1stPerson: Word('прокапываю', 4),
  singular2ndPerson: Word('прокапываешь', 4),
  singular3rdPerson: Word('прокапывает', 4),
  plural1stPerson: Word('прокапываем', 4),
  plural2ndPerson: Word('прокапываете', 4),
  plural3rdPerson: Word('прокапывают', 4),
  masculinePast: Word('прокапывал', 4),
  femininePast: Word('прокапывала', 4),
  neuterPast: Word('прокапывало', 4),
  pluralPast: Word('прокапывали', 4),
  imperativeInformal: Word('прокапывай', 4),
  imperativeFormal: Word('прокапывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прокапывать.name.text, прокапывать);

export { прокапывать };