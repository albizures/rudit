import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгладить: PerfectVerb = {
  name: Word('выгладить', 1),
  singular1stPerson: Word('выглажу', 1),
  singular2ndPerson: Word('выгладишь', 1),
  singular3rdPerson: Word('выгладит', 1),
  plural1stPerson: Word('выгладим', 1),
  plural2ndPerson: Word('выгладите', 1),
  plural3rdPerson: Word('выгладят', 1),
  masculinePast: Word('выгладил', 1),
  femininePast: Word('выгладила', 1),
  neuterPast: Word('выгладило', 1),
  pluralPast: Word('выгладили', 1),
  imperativeInformal: Word('выглади//вы'гладь', 1),
  imperativeFormal: Word('выгладите//вы'гладьте', 1),
  imperfect: [],
};

perfectVerbs.set(выгладить.name.text, выгладить);

export { выгладить };