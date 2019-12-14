import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const махать: PerfectVerb = {
  name: Word('махать', 3),
  singular1stPerson: Word('машу', 3),
  singular2ndPerson: Word('машешь', 1),
  singular3rdPerson: Word('машет', 1),
  plural1stPerson: Word('машем', 1),
  plural2ndPerson: Word('машете', 1),
  plural3rdPerson: Word('машут', 1),
  masculinePast: Word('махал', 3),
  femininePast: Word('махала', 3),
  neuterPast: Word('махало', 3),
  pluralPast: Word('махали', 3),
  imperativeInformal: Word('маши', 3),
  imperativeFormal: Word('машите', 3),
  imperfect: ['махнуть','помахать'],
};

perfectVerbs.set(махать.name.text, махать);

export { махать };