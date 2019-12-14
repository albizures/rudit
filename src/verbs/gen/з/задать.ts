import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задать: PerfectVerb = {
  name: Word('задать', 3),
  singular1stPerson: Word('задам', 3),
  singular2ndPerson: Word('задашь', 3),
  singular3rdPerson: Word('задаст', 3),
  plural1stPerson: Word('зададим', 5),
  plural2ndPerson: Word('зададите', 5),
  plural3rdPerson: Word('зададут', 5),
  masculinePast: Word('задал,за'дал', 3),
  femininePast: Word('задала', 5),
  neuterPast: Word('задало,задало'', 3),
  pluralPast: Word('задали,за'дали', 3),
  imperativeInformal: Word('задай', 3),
  imperativeFormal: Word('задайте', 3),
  imperfect: ['задавать'],
};

perfectVerbs.set(задать.name.text, задать);

export { задать };