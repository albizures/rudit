import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наготовить: PerfectVerb = {
  name: Word('наготовить', 5),
  singular1stPerson: Word('наготовлю', 5),
  singular2ndPerson: Word('наготовишь', 5),
  singular3rdPerson: Word('наготовит', 5),
  plural1stPerson: Word('наготовим', 5),
  plural2ndPerson: Word('наготовите', 5),
  plural3rdPerson: Word('наготовят', 5),
  masculinePast: Word('наготовил', 5),
  femininePast: Word('наготовила', 5),
  neuterPast: Word('наготовило', 5),
  pluralPast: Word('наготовили', 5),
  imperativeInformal: Word('наготовь', 5),
  imperativeFormal: Word('наготовьте', 5),
  imperfect: [],
};

perfectVerbs.set(наготовить.name.text, наготовить);

export { наготовить };