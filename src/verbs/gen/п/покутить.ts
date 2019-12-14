import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покутить: PerfectVerb = {
  name: Word('покутить', 5),
  singular1stPerson: Word('покучу', 5),
  singular2ndPerson: Word('покутишь', 3),
  singular3rdPerson: Word('покутит', 3),
  plural1stPerson: Word('покутим', 3),
  plural2ndPerson: Word('покутите', 3),
  plural3rdPerson: Word('покутят', 3),
  masculinePast: Word('покутил', 5),
  femininePast: Word('покутила', 5),
  neuterPast: Word('покутило', 5),
  pluralPast: Word('покутили', 5),
  imperativeInformal: Word('покути', 5),
  imperativeFormal: Word('покутите', 5),
  imperfect: [],
};

perfectVerbs.set(покутить.name.text, покутить);

export { покутить };