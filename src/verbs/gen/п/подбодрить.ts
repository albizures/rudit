import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбодрить: PerfectVerb = {
  name: Word('подбодрить', 7),
  singular1stPerson: Word('подбодрю', 7),
  singular2ndPerson: Word('подбодришь', 7),
  singular3rdPerson: Word('подбодрит', 7),
  plural1stPerson: Word('подбодрим', 7),
  plural2ndPerson: Word('подбодрите', 7),
  plural3rdPerson: Word('подбодрят', 7),
  masculinePast: Word('подбодрил', 7),
  femininePast: Word('подбодрила', 7),
  neuterPast: Word('подбодрило', 7),
  pluralPast: Word('подбодрили', 7),
  imperativeInformal: Word('подбодри', 7),
  imperativeFormal: Word('подбодрите', 7),
  imperfect: [],
};

perfectVerbs.set(подбодрить.name.text, подбодрить);

export { подбодрить };