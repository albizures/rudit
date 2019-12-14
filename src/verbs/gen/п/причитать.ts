import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причитать: PerfectVerb = {
  name: Word('причитать', 6),
  singular1stPerson: Word('причитаю', 6),
  singular2ndPerson: Word('причитаешь', 6),
  singular3rdPerson: Word('причитает', 6),
  plural1stPerson: Word('причитаем', 6),
  plural2ndPerson: Word('причитаете', 6),
  plural3rdPerson: Word('причитают', 6),
  masculinePast: Word('причитал', 6),
  femininePast: Word('причитала', 6),
  neuterPast: Word('причитало', 6),
  pluralPast: Word('причитали', 6),
  imperativeInformal: Word('причитай', 6),
  imperativeFormal: Word('причитайте', 6),
  imperfect: [],
};

perfectVerbs.set(причитать.name.text, причитать);

export { причитать };