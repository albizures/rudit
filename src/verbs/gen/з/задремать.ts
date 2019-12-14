import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задремать: PerfectVerb = {
  name: Word('задремать', 6),
  singular1stPerson: Word('задремлю', 7),
  singular2ndPerson: Word('задремлешь', 4),
  singular3rdPerson: Word('задремлет', 4),
  plural1stPerson: Word('задремлем', 4),
  plural2ndPerson: Word('задремлете', 4),
  plural3rdPerson: Word('задремлют', 4),
  masculinePast: Word('задремал', 6),
  femininePast: Word('задремала', 6),
  neuterPast: Word('задремало', 6),
  pluralPast: Word('задремали', 6),
  imperativeInformal: Word('задремли', 7),
  imperativeFormal: Word('задремлите', 7),
  imperfect: ['задрёмывать'],
};

perfectVerbs.set(задремать.name.text, задремать);

export { задремать };