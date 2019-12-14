import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корёжить: PerfectVerb = {
  name: Word('корёжить', 3),
  singular1stPerson: Word('корёжу', 3),
  singular2ndPerson: Word('корёжишь', 3),
  singular3rdPerson: Word('корёжит', 3),
  plural1stPerson: Word('корёжим', 3),
  plural2ndPerson: Word('корёжите', 3),
  plural3rdPerson: Word('корёжат', 3),
  masculinePast: Word('корёжил', 3),
  femininePast: Word('корёжила', 3),
  neuterPast: Word('корёжило', 3),
  pluralPast: Word('корёжили', 3),
  imperativeInformal: Word('корёжь', 3),
  imperativeFormal: Word('корёжьте', 3),
  imperfect: [],
};

perfectVerbs.set(корёжить.name.text, корёжить);

export { корёжить };