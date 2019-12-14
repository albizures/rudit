import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокусывать: PerfectVerb = {
  name: Word('прокусывать', 4),
  singular1stPerson: Word('прокусываю', 4),
  singular2ndPerson: Word('прокусываешь', 4),
  singular3rdPerson: Word('прокусывает', 4),
  plural1stPerson: Word('прокусываем', 4),
  plural2ndPerson: Word('прокусываете', 4),
  plural3rdPerson: Word('прокусывают', 4),
  masculinePast: Word('прокусывал', 4),
  femininePast: Word('прокусывала', 4),
  neuterPast: Word('прокусывало', 4),
  pluralPast: Word('прокусывали', 4),
  imperativeInformal: Word('прокусывай', 4),
  imperativeFormal: Word('прокусывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прокусывать.name.text, прокусывать);

export { прокусывать };