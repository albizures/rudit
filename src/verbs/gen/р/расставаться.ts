import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расставаться: PerfectVerb = {
  name: Word('расставаться', 7),
  singular1stPerson: Word('расстаюсь', 6),
  singular2ndPerson: Word('расстаёшься', 1),
  singular3rdPerson: Word('расстаётся', 1),
  plural1stPerson: Word('расстаёмся', 1),
  plural2ndPerson: Word('расстаётесь', 1),
  plural3rdPerson: Word('расстаются', 6),
  masculinePast: Word('расставался', 7),
  femininePast: Word('расставалась', 7),
  neuterPast: Word('расставалось', 7),
  pluralPast: Word('расставались', 7),
  imperativeInformal: Word('расставайся', 7),
  imperativeFormal: Word('расставайтесь', 7),
  imperfect: ['расстаться'],
};

perfectVerbs.set(расставаться.name.text, расставаться);

export { расставаться };