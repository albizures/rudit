import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнадёжить: PerfectVerb = {
  name: Word('обнадёжить', 3),
  singular1stPerson: Word('обнадёжу', 3),
  singular2ndPerson: Word('обнадёжишь', 3),
  singular3rdPerson: Word('обнадёжит', 3),
  plural1stPerson: Word('обнадёжим', 3),
  plural2ndPerson: Word('обнадёжите', 3),
  plural3rdPerson: Word('обнадёжат', 3),
  masculinePast: Word('обнадёжил', 3),
  femininePast: Word('обнадёжила', 3),
  neuterPast: Word('обнадёжило', 3),
  pluralPast: Word('обнадёжили', 3),
  imperativeInformal: Word('обнадёжь', 3),
  imperativeFormal: Word('обнадёжьте', 3),
  imperfect: [],
};

perfectVerbs.set(обнадёжить.name.text, обнадёжить);

export { обнадёжить };