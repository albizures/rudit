import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбодрить: PerfectVerb = {
  name: Word('взбодрить', 6),
  singular1stPerson: Word('взбодрю', 6),
  singular2ndPerson: Word('взбодришь', 6),
  singular3rdPerson: Word('взбодрит', 6),
  plural1stPerson: Word('взбодрим', 6),
  plural2ndPerson: Word('взбодрите', 6),
  plural3rdPerson: Word('взбодрят', 6),
  masculinePast: Word('взбодрил', 6),
  femininePast: Word('взбодрила', 6),
  neuterPast: Word('взбодрило', 6),
  pluralPast: Word('взбодрили', 6),
  imperativeInformal: Word('взбодри', 6),
  imperativeFormal: Word('взбодрите', 6),
  imperfect: [],
};

perfectVerbs.set(взбодрить.name.text, взбодрить);

export { взбодрить };