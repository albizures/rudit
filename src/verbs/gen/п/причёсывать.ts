import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причёсывать: PerfectVerb = {
  name: Word('причёсывать', 4),
  singular1stPerson: Word('причёсываю', 4),
  singular2ndPerson: Word('причёсываешь', 4),
  singular3rdPerson: Word('причёсывает', 4),
  plural1stPerson: Word('причёсываем', 4),
  plural2ndPerson: Word('причёсываете', 4),
  plural3rdPerson: Word('причёсывают', 4),
  masculinePast: Word('причёсывал', 4),
  femininePast: Word('причёсывала', 4),
  neuterPast: Word('причёсывало', 4),
  pluralPast: Word('причёсывали', 4),
  imperativeInformal: Word('причёсывай', 4),
  imperativeFormal: Word('причёсывайте', 4),
  imperfect: [],
};

perfectVerbs.set(причёсывать.name.text, причёсывать);

export { причёсывать };