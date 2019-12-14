import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уготовить: PerfectVerb = {
  name: Word('уготовить', 4),
  singular1stPerson: Word('уготовлю', 4),
  singular2ndPerson: Word('уготовишь', 4),
  singular3rdPerson: Word('уготовит', 4),
  plural1stPerson: Word('уготовим', 4),
  plural2ndPerson: Word('уготовите', 4),
  plural3rdPerson: Word('уготовят', 4),
  masculinePast: Word('уготовил', 4),
  femininePast: Word('уготовила', 4),
  neuterPast: Word('уготовило', 4),
  pluralPast: Word('уготовили', 4),
  imperativeInformal: Word('уготовь', 4),
  imperativeFormal: Word('уготовьте', 4),
  imperfect: [],
};

perfectVerbs.set(уготовить.name.text, уготовить);

export { уготовить };