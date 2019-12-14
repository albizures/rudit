import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отутюжить: PerfectVerb = {
  name: Word('отутюжить', 4),
  singular1stPerson: Word('отутюжу', 4),
  singular2ndPerson: Word('отутюжишь', 4),
  singular3rdPerson: Word('отутюжит', 4),
  plural1stPerson: Word('отутюжим', 4),
  plural2ndPerson: Word('отутюжите', 4),
  plural3rdPerson: Word('отутюжат', 4),
  masculinePast: Word('отутюжил', 4),
  femininePast: Word('отутюжила', 4),
  neuterPast: Word('отутюжило', 4),
  pluralPast: Word('отутюжили', 4),
  imperativeInformal: Word('отутюжь', 4),
  imperativeFormal: Word('отутюжьте', 4),
  imperfect: [],
};

perfectVerbs.set(отутюжить.name.text, отутюжить);

export { отутюжить };