import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдюжить: PerfectVerb = {
  name: Word('выдюжить', 1),
  singular1stPerson: Word('выдюжу', 1),
  singular2ndPerson: Word('выдюжишь', 1),
  singular3rdPerson: Word('выдюжит', 1),
  plural1stPerson: Word('выдюжим', 1),
  plural2ndPerson: Word('выдюжите', 1),
  plural3rdPerson: Word('выдюжат', 1),
  masculinePast: Word('выдюжил', 1),
  femininePast: Word('выдюжила', 1),
  neuterPast: Word('выдюжило', 1),
  pluralPast: Word('выдюжили', 1),
  imperativeInformal: Word('выдюжи', 1),
  imperativeFormal: Word('выдюжите', 1),
  imperfect: [],
};

perfectVerbs.set(выдюжить.name.text, выдюжить);

export { выдюжить };