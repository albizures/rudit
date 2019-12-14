import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надзирать: PerfectVerb = {
  name: Word('надзирать', 6),
  singular1stPerson: Word('надзираю', 6),
  singular2ndPerson: Word('надзираешь', 6),
  singular3rdPerson: Word('надзирает', 6),
  plural1stPerson: Word('надзираем', 6),
  plural2ndPerson: Word('надзираете', 6),
  plural3rdPerson: Word('надзирают', 6),
  masculinePast: Word('надзирал', 6),
  femininePast: Word('надзирала', 6),
  neuterPast: Word('надзирало', 6),
  pluralPast: Word('надзирали', 6),
  imperativeInformal: Word('надзирай', 6),
  imperativeFormal: Word('надзирайте', 6),
  imperfect: [],
};

perfectVerbs.set(надзирать.name.text, надзирать);

export { надзирать };