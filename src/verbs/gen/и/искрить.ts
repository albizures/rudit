import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искрить: PerfectVerb = {
  name: Word('искрить', 4),
  singular1stPerson: Word('искрю', 4),
  singular2ndPerson: Word('искришь', 4),
  singular3rdPerson: Word('искрит', 4),
  plural1stPerson: Word('искрим', 4),
  plural2ndPerson: Word('искрите', 4),
  plural3rdPerson: Word('искрят', 4),
  masculinePast: Word('искрил', 4),
  femininePast: Word('искрила', 4),
  neuterPast: Word('искрило', 4),
  pluralPast: Word('искрили', 4),
  imperativeInformal: Word('искри', 4),
  imperativeFormal: Word('искрите', 4),
  imperfect: [],
};

perfectVerbs.set(искрить.name.text, искрить);

export { искрить };