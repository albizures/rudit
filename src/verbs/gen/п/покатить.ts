import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покатить: PerfectVerb = {
  name: Word('покатить', 5),
  singular1stPerson: Word('покачу', 5),
  singular2ndPerson: Word('покатишь', 3),
  singular3rdPerson: Word('покатит', 3),
  plural1stPerson: Word('покатим', 3),
  plural2ndPerson: Word('покатите', 3),
  plural3rdPerson: Word('покатят', 3),
  masculinePast: Word('покатил', 5),
  femininePast: Word('покатила', 5),
  neuterPast: Word('покатило', 5),
  pluralPast: Word('покатили', 5),
  imperativeInformal: Word('покати', 5),
  imperativeFormal: Word('покатите', 5),
  imperfect: [],
};

perfectVerbs.set(покатить.name.text, покатить);

export { покатить };