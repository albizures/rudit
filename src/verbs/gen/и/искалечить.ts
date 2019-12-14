import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искалечить: PerfectVerb = {
  name: Word('искалечить', 5),
  singular1stPerson: Word('искалечу', 5),
  singular2ndPerson: Word('искалечишь', 5),
  singular3rdPerson: Word('искалечит', 5),
  plural1stPerson: Word('искалечим', 5),
  plural2ndPerson: Word('искалечите', 5),
  plural3rdPerson: Word('искалечат', 5),
  masculinePast: Word('искалечил', 5),
  femininePast: Word('искалечила', 5),
  neuterPast: Word('искалечило', 5),
  pluralPast: Word('искалечили', 5),
  imperativeInformal: Word('искалечь', 5),
  imperativeFormal: Word('искалечьте', 5),
  imperfect: [],
};

perfectVerbs.set(искалечить.name.text, искалечить);

export { искалечить };