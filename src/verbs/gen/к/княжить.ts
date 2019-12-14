import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const княжить: PerfectVerb = {
  name: Word('княжить', 2),
  singular1stPerson: Word('княжу', 2),
  singular2ndPerson: Word('княжишь', 2),
  singular3rdPerson: Word('княжит', 2),
  plural1stPerson: Word('княжим', 2),
  plural2ndPerson: Word('княжите', 2),
  plural3rdPerson: Word('княжат', 2),
  masculinePast: Word('княжил', 2),
  femininePast: Word('княжила', 2),
  neuterPast: Word('княжило', 2),
  pluralPast: Word('княжили', 2),
  imperativeInformal: Word('княжь', 2),
  imperativeFormal: Word('княжьте', 2),
  imperfect: [],
};

perfectVerbs.set(княжить.name.text, княжить);

export { княжить };