import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтащить: PerfectVerb = {
  name: Word('подтащить', 6),
  singular1stPerson: Word('подтащу', 6),
  singular2ndPerson: Word('подтащишь', 4),
  singular3rdPerson: Word('подтащит', 4),
  plural1stPerson: Word('подтащим', 4),
  plural2ndPerson: Word('подтащите', 4),
  plural3rdPerson: Word('подтащат', 4),
  masculinePast: Word('подтащил', 6),
  femininePast: Word('подтащила', 6),
  neuterPast: Word('подтащило', 6),
  pluralPast: Word('подтащили', 6),
  imperativeInformal: Word('подтащи', 6),
  imperativeFormal: Word('подтащите', 6),
  imperfect: [],
};

perfectVerbs.set(подтащить.name.text, подтащить);

export { подтащить };