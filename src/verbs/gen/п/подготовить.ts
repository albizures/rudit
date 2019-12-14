import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подготовить: PerfectVerb = {
  name: Word('подготовить', 6),
  singular1stPerson: Word('подготовлю', 6),
  singular2ndPerson: Word('подготовишь', 6),
  singular3rdPerson: Word('подготовит', 6),
  plural1stPerson: Word('подготовим', 6),
  plural2ndPerson: Word('подготовите', 6),
  plural3rdPerson: Word('подготовят', 6),
  masculinePast: Word('подготовил', 6),
  femininePast: Word('подготовила', 6),
  neuterPast: Word('подготовило', 6),
  pluralPast: Word('подготовили', 6),
  imperativeInformal: Word('подготовь', 6),
  imperativeFormal: Word('подготовьте', 6),
  imperfect: ['подготавливать'],
};

perfectVerbs.set(подготовить.name.text, подготовить);

export { подготовить };