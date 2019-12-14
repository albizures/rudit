import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнадёжить: PerfectVerb = {
  name: Word('обнадёжить', 5),
  singular1stPerson: Word('обнадёжу', 5),
  singular2ndPerson: Word('обнадёжишь', 5),
  singular3rdPerson: Word('обнадёжит', 5),
  plural1stPerson: Word('обнадёжим', 5),
  plural2ndPerson: Word('обнадёжите', 5),
  plural3rdPerson: Word('обнадёжат', 5),
  masculinePast: Word('обнадёжил', 5),
  femininePast: Word('обнадёжила', 5),
  neuterPast: Word('обнадёжило', 5),
  pluralPast: Word('обнадёжили', 5),
  imperativeInformal: Word('обнадёжь', 5),
  imperativeFormal: Word('обнадёжьте', 5),
  imperfect: [],
};

perfectVerbs.set(обнадёжить.name.text, обнадёжить);

export { обнадёжить };