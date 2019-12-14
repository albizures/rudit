import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const женить: PerfectVerb = {
  name: Word('женить', 3),
  singular1stPerson: Word('женю', 3),
  singular2ndPerson: Word('женишь', 1),
  singular3rdPerson: Word('женит', 1),
  plural1stPerson: Word('женим', 1),
  plural2ndPerson: Word('жените', 1),
  plural3rdPerson: Word('женят', 1),
  masculinePast: Word('женил', 3),
  femininePast: Word('женила', 3),
  neuterPast: Word('женило', 3),
  pluralPast: Word('женили', 3),
  imperativeInformal: Word('жени', 3),
  imperativeFormal: Word('жените', 3),
  imperfect: [],
};

perfectVerbs.set(женить.name.text, женить);

export { женить };