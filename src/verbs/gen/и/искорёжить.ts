import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искорёжить: PerfectVerb = {
  name: Word('искорёжить', 0),
  singular1stPerson: Word('искорёжу', 0),
  singular2ndPerson: Word('искорёжишь', 0),
  singular3rdPerson: Word('искорёжит', 0),
  plural1stPerson: Word('искорёжим', 0),
  plural2ndPerson: Word('искорёжите', 9),
  plural3rdPerson: Word('искорёжат', 7),
  masculinePast: Word('искорёжил', 0),
  femininePast: Word('искорёжила', 9),
  neuterPast: Word('искорёжило', 0),
  pluralPast: Word('искорёжили', 0),
  imperativeInformal: Word('искорёжь', 0),
  imperativeFormal: Word('искорёжьте', 9),
  imperfect: [],
};

perfectVerbs.set(искорёжить.name.text, искорёжить);

export { искорёжить };