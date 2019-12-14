import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпортить: PerfectVerb = {
  name: Word('подпортить', 4),
  singular1stPerson: Word('подпорчу', 4),
  singular2ndPerson: Word('подпортишь', 4),
  singular3rdPerson: Word('подпортит', 4),
  plural1stPerson: Word('подпортим', 4),
  plural2ndPerson: Word('подпортите', 4),
  plural3rdPerson: Word('подпортят', 4),
  masculinePast: Word('подпортил', 4),
  femininePast: Word('подпортила', 4),
  neuterPast: Word('подпортило', 4),
  pluralPast: Word('подпортили', 4),
  imperativeInformal: Word('подпорти//подпо'рть', 4),
  imperativeFormal: Word('подпортите//подпо'ртьте', 4),
  imperfect: [],
};

perfectVerbs.set(подпортить.name.text, подпортить);

export { подпортить };