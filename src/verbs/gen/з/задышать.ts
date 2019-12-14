import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задышать: PerfectVerb = {
  name: Word('задышать', 5),
  singular1stPerson: Word('задышу', 5),
  singular2ndPerson: Word('задышишь', 3),
  singular3rdPerson: Word('задышит', 3),
  plural1stPerson: Word('задышим', 3),
  plural2ndPerson: Word('задышите', 3),
  plural3rdPerson: Word('задышат', 3),
  masculinePast: Word('задышал', 5),
  femininePast: Word('задышала', 5),
  neuterPast: Word('задышало', 5),
  pluralPast: Word('задышали', 5),
  imperativeInformal: Word('задыши', 5),
  imperativeFormal: Word('задышите', 5),
  imperfect: [],
};

perfectVerbs.set(задышать.name.text, задышать);

export { задышать };