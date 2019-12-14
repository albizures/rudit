import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мотыжить: PerfectVerb = {
  name: Word('мотыжить', 3),
  singular1stPerson: Word('мотыжу', 3),
  singular2ndPerson: Word('мотыжишь', 3),
  singular3rdPerson: Word('мотыжит', 3),
  plural1stPerson: Word('мотыжим', 3),
  plural2ndPerson: Word('мотыжите', 3),
  plural3rdPerson: Word('мотыжат', 3),
  masculinePast: Word('мотыжил', 3),
  femininePast: Word('мотыжила', 3),
  neuterPast: Word('мотыжило', 3),
  pluralPast: Word('мотыжили', 3),
  imperativeInformal: Word('мотыжь', 3),
  imperativeFormal: Word('мотыжьте', 3),
  imperfect: [],
};

perfectVerbs.set(мотыжить.name.text, мотыжить);

export { мотыжить };