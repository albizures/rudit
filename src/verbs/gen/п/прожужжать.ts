import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожужжать: PerfectVerb = {
  name: Word('прожужжать', 7),
  singular1stPerson: Word('прожужжу', 7),
  singular2ndPerson: Word('прожужжишь', 7),
  singular3rdPerson: Word('прожужжит', 7),
  plural1stPerson: Word('прожужжим', 7),
  plural2ndPerson: Word('прожужжите', 7),
  plural3rdPerson: Word('прожужжат', 7),
  masculinePast: Word('прожужжал', 7),
  femininePast: Word('прожужжала', 7),
  neuterPast: Word('прожужжало', 7),
  pluralPast: Word('прожужжали', 7),
  imperativeInformal: Word('прожужжи', 7),
  imperativeFormal: Word('прожужжите', 7),
  imperfect: [],
};

perfectVerbs.set(прожужжать.name.text, прожужжать);

export { прожужжать };