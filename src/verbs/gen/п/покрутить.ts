import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрутить: PerfectVerb = {
  name: Word('покрутить', 6),
  singular1stPerson: Word('покручу', 6),
  singular2ndPerson: Word('покрутишь', 4),
  singular3rdPerson: Word('покрутит', 4),
  plural1stPerson: Word('покрутим', 4),
  plural2ndPerson: Word('покрутите', 4),
  plural3rdPerson: Word('покрутят', 4),
  masculinePast: Word('покрутил', 6),
  femininePast: Word('покрутила', 6),
  neuterPast: Word('покрутило', 6),
  pluralPast: Word('покрутили', 6),
  imperativeInformal: Word('покрути', 6),
  imperativeFormal: Word('покрутите', 6),
  imperfect: [],
};

perfectVerbs.set(покрутить.name.text, покрутить);

export { покрутить };