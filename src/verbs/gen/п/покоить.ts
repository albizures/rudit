import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покоить: PerfectVerb = {
  name: Word('покоить', 3),
  singular1stPerson: Word('покою', 3),
  singular2ndPerson: Word('покоишь', 3),
  singular3rdPerson: Word('покоит', 3),
  plural1stPerson: Word('покоим', 3),
  plural2ndPerson: Word('покоите', 3),
  plural3rdPerson: Word('покоят', 3),
  masculinePast: Word('покоил', 3),
  femininePast: Word('покоила', 3),
  neuterPast: Word('покоило', 3),
  pluralPast: Word('покоили', 3),
  imperativeInformal: Word('покой', 3),
  imperativeFormal: Word('покойте', 3),
  imperfect: [],
};

perfectVerbs.set(покоить.name.text, покоить);

export { покоить };