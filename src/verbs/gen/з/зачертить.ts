import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачертить: PerfectVerb = {
  name: Word('зачертить', 6),
  singular1stPerson: Word('зачерчу', 6),
  singular2ndPerson: Word('зачертишь', 3),
  singular3rdPerson: Word('зачертит', 3),
  plural1stPerson: Word('зачертим', 3),
  plural2ndPerson: Word('зачертите', 3),
  plural3rdPerson: Word('зачертят', 3),
  masculinePast: Word('зачертил', 6),
  femininePast: Word('зачертила', 6),
  neuterPast: Word('зачертило', 6),
  pluralPast: Word('зачертили', 6),
  imperativeInformal: Word('зачерти', 6),
  imperativeFormal: Word('зачертите', 6),
  imperfect: [],
};

perfectVerbs.set(зачертить.name.text, зачертить);

export { зачертить };