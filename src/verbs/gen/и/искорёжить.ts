import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искорёжить: PerfectVerb = {
  name: Word('искорёжить', 5),
  singular1stPerson: Word('искорёжу', 5),
  singular2ndPerson: Word('искорёжишь', 5),
  singular3rdPerson: Word('искорёжит', 5),
  plural1stPerson: Word('искорёжим', 5),
  plural2ndPerson: Word('искорёжите', 5),
  plural3rdPerson: Word('искорёжат', 5),
  masculinePast: Word('искорёжил', 5),
  femininePast: Word('искорёжила', 5),
  neuterPast: Word('искорёжило', 5),
  pluralPast: Word('искорёжили', 5),
  imperativeInformal: Word('искорёжь', 5),
  imperativeFormal: Word('искорёжьте', 5),
  imperfect: [],
};

perfectVerbs.set(искорёжить.name.text, искорёжить);

export { искорёжить };