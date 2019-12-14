import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вовлекаться: PerfectVerb = {
  name: Word('вовлекаться', 6),
  singular1stPerson: Word('вовлекаюсь', 6),
  singular2ndPerson: Word('вовлекаешься', 6),
  singular3rdPerson: Word('вовлекается', 6),
  plural1stPerson: Word('вовлекаемся', 6),
  plural2ndPerson: Word('вовлекаетесь', 6),
  plural3rdPerson: Word('вовлекаются', 6),
  masculinePast: Word('вовлекался', 6),
  femininePast: Word('вовлекалась', 6),
  neuterPast: Word('вовлекалось', 6),
  pluralPast: Word('вовлекались', 6),
  imperativeInformal: Word('вовлекайся', 6),
  imperativeFormal: Word('вовлекайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(вовлекаться.name.text, вовлекаться);

export { вовлекаться };