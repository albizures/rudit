import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изготовить: PerfectVerb = {
  name: Word('изготовить', 5),
  singular1stPerson: Word('изготовлю', 5),
  singular2ndPerson: Word('изготовишь', 5),
  singular3rdPerson: Word('изготовит', 5),
  plural1stPerson: Word('изготовим', 5),
  plural2ndPerson: Word('изготовите', 5),
  plural3rdPerson: Word('изготовят', 5),
  masculinePast: Word('изготовил', 5),
  femininePast: Word('изготовила', 5),
  neuterPast: Word('изготовило', 5),
  pluralPast: Word('изготовили', 5),
  imperativeInformal: Word('изготовь', 5),
  imperativeFormal: Word('изготовьте', 5),
  imperfect: [],
};

perfectVerbs.set(изготовить.name.text, изготовить);

export { изготовить };