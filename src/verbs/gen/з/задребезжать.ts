import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задребезжать: PerfectVerb = {
  name: Word('задребезжать', 9),
  singular1stPerson: Word('задребезжу', 9),
  singular2ndPerson: Word('задребезжишь', 9),
  singular3rdPerson: Word('задребезжит', 9),
  plural1stPerson: Word('задребезжим', 9),
  plural2ndPerson: Word('задребезжите', 9),
  plural3rdPerson: Word('задребезжат', 9),
  masculinePast: Word('задребезжал', 9),
  femininePast: Word('задребезжала', 9),
  neuterPast: Word('задребезжало', 9),
  pluralPast: Word('задребезжали', 9),
  imperativeInformal: Word('задребезжи', 9),
  imperativeFormal: Word('задребезжите', 9),
  imperfect: [],
};

perfectVerbs.set(задребезжать.name.text, задребезжать);

export { задребезжать };