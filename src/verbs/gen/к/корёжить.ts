import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корёжить: PerfectVerb = {
  name: Word('корёжить', 5),
  singular1stPerson: Word('корёжу', 1),
  singular2ndPerson: Word('корёжишь', 5),
  singular3rdPerson: Word('корёжит', 5),
  plural1stPerson: Word('корёжим', 5),
  plural2ndPerson: Word('корёжите', 7),
  plural3rdPerson: Word('корёжат', 5),
  masculinePast: Word('корёжил', 5),
  femininePast: Word('корёжила', 7),
  neuterPast: Word('корёжило', 5),
  pluralPast: Word('корёжили', 5),
  imperativeInformal: Word('корёжь', 1),
  imperativeFormal: Word('корёжьте', 7),
  imperfect: [],
};

perfectVerbs.set(корёжить.name.text, корёжить);

export { корёжить };