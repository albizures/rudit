import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задрожать: PerfectVerb = {
  name: Word('задрожать', 6),
  singular1stPerson: Word('задрожу', 6),
  singular2ndPerson: Word('задрожишь', 6),
  singular3rdPerson: Word('задрожит', 6),
  plural1stPerson: Word('задрожим', 6),
  plural2ndPerson: Word('задрожите', 6),
  plural3rdPerson: Word('задрожат', 6),
  masculinePast: Word('задрожал', 6),
  femininePast: Word('задрожала', 6),
  neuterPast: Word('задрожало', 6),
  pluralPast: Word('задрожали', 6),
  imperativeInformal: Word('задрожи', 6),
  imperativeFormal: Word('задрожите', 6),
  imperfect: [],
};

perfectVerbs.set(задрожать.name.text, задрожать);

export { задрожать };