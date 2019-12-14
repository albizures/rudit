import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покружить: PerfectVerb = {
  name: Word('покружить', 6),
  singular1stPerson: Word('покружу', 6),
  singular2ndPerson: Word('покружишь', 4),
  singular3rdPerson: Word('покружит', 4),
  plural1stPerson: Word('покружим', 4),
  plural2ndPerson: Word('покружите', 4),
  plural3rdPerson: Word('покружат', 4),
  masculinePast: Word('покружил', 6),
  femininePast: Word('покружила', 6),
  neuterPast: Word('покружило', 6),
  pluralPast: Word('покружили', 6),
  imperativeInformal: Word('покружи', 6),
  imperativeFormal: Word('покружите', 6),
  imperfect: [],
};

perfectVerbs.set(покружить.name.text, покружить);

export { покружить };