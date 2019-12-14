import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приготовить: PerfectVerb = {
  name: Word('приготовить', 6),
  singular1stPerson: Word('приготовлю', 6),
  singular2ndPerson: Word('приготовишь', 6),
  singular3rdPerson: Word('приготовит', 6),
  plural1stPerson: Word('приготовим', 6),
  plural2ndPerson: Word('приготовите', 6),
  plural3rdPerson: Word('приготовят', 6),
  masculinePast: Word('приготовил', 6),
  femininePast: Word('приготовила', 6),
  neuterPast: Word('приготовило', 6),
  pluralPast: Word('приготовили', 6),
  imperativeInformal: Word('приготовь', 6),
  imperativeFormal: Word('приготовьте', 6),
  imperfect: ['готовить'],
};

perfectVerbs.set(приготовить.name.text, приготовить);

export { приготовить };