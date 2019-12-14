import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытравить: PerfectVerb = {
  name: Word('вытравить', 1),
  singular1stPerson: Word('вытравлю', 1),
  singular2ndPerson: Word('вытравишь', 1),
  singular3rdPerson: Word('вытравит', 1),
  plural1stPerson: Word('вытравим', 1),
  plural2ndPerson: Word('вытравите', 1),
  plural3rdPerson: Word('вытравят', 1),
  masculinePast: Word('вытравил', 1),
  femininePast: Word('вытравила', 1),
  neuterPast: Word('вытравило', 1),
  pluralPast: Word('вытравили', 1),
  imperativeInformal: Word('вытрави', 1),
  imperativeFormal: Word('вытравите', 1),
  imperfect: [],
};

perfectVerbs.set(вытравить.name.text, вытравить);

export { вытравить };