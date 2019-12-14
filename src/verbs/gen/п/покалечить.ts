import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покалечить: PerfectVerb = {
  name: Word('покалечить', 5),
  singular1stPerson: Word('покалечу', 5),
  singular2ndPerson: Word('покалечишь', 5),
  singular3rdPerson: Word('покалечит', 5),
  plural1stPerson: Word('покалечим', 5),
  plural2ndPerson: Word('покалечите', 5),
  plural3rdPerson: Word('покалечат', 5),
  masculinePast: Word('покалечил', 5),
  femininePast: Word('покалечила', 5),
  neuterPast: Word('покалечило', 5),
  pluralPast: Word('покалечили', 5),
  imperativeInformal: Word('покалечь', 5),
  imperativeFormal: Word('покалечьте', 5),
  imperfect: [],
};

perfectVerbs.set(покалечить.name.text, покалечить);

export { покалечить };