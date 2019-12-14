import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const готовить: PerfectVerb = {
  name: Word('готовить', 3),
  singular1stPerson: Word('готовлю', 3),
  singular2ndPerson: Word('готовишь', 3),
  singular3rdPerson: Word('готовит', 3),
  plural1stPerson: Word('готовим', 3),
  plural2ndPerson: Word('готовите', 3),
  plural3rdPerson: Word('готовят', 3),
  masculinePast: Word('готовил', 3),
  femininePast: Word('готовила', 3),
  neuterPast: Word('готовило', 3),
  pluralPast: Word('готовили', 3),
  imperativeInformal: Word('готовь', 3),
  imperativeFormal: Word('готовьте', 3),
  imperfect: ['приготовить','подготовить','заготовить'],
};

perfectVerbs.set(готовить.name.text, готовить);

export { готовить };