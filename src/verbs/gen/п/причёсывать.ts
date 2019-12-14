import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причёсывать: PerfectVerb = {
  name: Word('причёсывать', 8),
  singular1stPerson: Word('причёсываю', 8),
  singular2ndPerson: Word('причёсываешь', 8),
  singular3rdPerson: Word('причёсывает', 8),
  plural1stPerson: Word('причёсываем', 8),
  plural2ndPerson: Word('причёсываете', 8),
  plural3rdPerson: Word('причёсывают', 8),
  masculinePast: Word('причёсывал', 8),
  femininePast: Word('причёсывала', 8),
  neuterPast: Word('причёсывало', 8),
  pluralPast: Word('причёсывали', 8),
  imperativeInformal: Word('причёсывай', 8),
  imperativeFormal: Word('причёсывайте', 8),
  imperfect: [],
};

perfectVerbs.set(причёсывать.name.text, причёсывать);

export { причёсывать };