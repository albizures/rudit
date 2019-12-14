import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вменить: PerfectVerb = {
  name: Word('вменить', 4),
  singular1stPerson: Word('вменю', 4),
  singular2ndPerson: Word('вменишь', 4),
  singular3rdPerson: Word('вменит', 4),
  plural1stPerson: Word('вменим', 4),
  plural2ndPerson: Word('вмените', 4),
  plural3rdPerson: Word('вменят', 4),
  masculinePast: Word('вменил', 4),
  femininePast: Word('вменила', 4),
  neuterPast: Word('вменило', 4),
  pluralPast: Word('вменили', 4),
  imperativeInformal: Word('вмени', 4),
  imperativeFormal: Word('вмените', 4),
  imperfect: [],
};

perfectVerbs.set(вменить.name.text, вменить);

export { вменить };