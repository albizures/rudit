import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сготовить: PerfectVerb = {
  name: Word('сготовить', 4),
  singular1stPerson: Word('сготовлю', 4),
  singular2ndPerson: Word('сготовишь', 4),
  singular3rdPerson: Word('сготовит', 4),
  plural1stPerson: Word('сготовим', 4),
  plural2ndPerson: Word('сготовите', 4),
  plural3rdPerson: Word('сготовят', 4),
  masculinePast: Word('сготовил', 4),
  femininePast: Word('сготовила', 4),
  neuterPast: Word('сготовило', 4),
  pluralPast: Word('сготовили', 4),
  imperativeInformal: Word('сготовь', 4),
  imperativeFormal: Word('сготовьте', 4),
  imperfect: [],
};

perfectVerbs.set(сготовить.name.text, сготовить);

export { сготовить };