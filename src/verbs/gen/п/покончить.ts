import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покончить: PerfectVerb = {
  name: Word('покончить', 3),
  singular1stPerson: Word('покончу', 3),
  singular2ndPerson: Word('покончишь', 3),
  singular3rdPerson: Word('покончит', 3),
  plural1stPerson: Word('покончим', 3),
  plural2ndPerson: Word('покончите', 3),
  plural3rdPerson: Word('покончат', 3),
  masculinePast: Word('покончил', 3),
  femininePast: Word('покончила', 3),
  neuterPast: Word('покончило', 3),
  pluralPast: Word('покончили', 3),
  imperativeInformal: Word('покончи', 3),
  imperativeFormal: Word('покончите', 3),
  imperfect: [],
};

perfectVerbs.set(покончить.name.text, покончить);

export { покончить };