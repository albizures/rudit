import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вонзаться: PerfectVerb = {
  name: Word('вонзаться', 4),
  singular1stPerson: Word('вонзаюсь', 4),
  singular2ndPerson: Word('вонзаешься', 4),
  singular3rdPerson: Word('вонзается', 4),
  plural1stPerson: Word('вонзаемся', 4),
  plural2ndPerson: Word('вонзаетесь', 4),
  plural3rdPerson: Word('вонзаются', 4),
  masculinePast: Word('вонзался', 4),
  femininePast: Word('вонзалась', 4),
  neuterPast: Word('вонзалось', 4),
  pluralPast: Word('вонзались', 4),
  imperativeInformal: Word('вонзайся', 4),
  imperativeFormal: Word('вонзайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вонзаться.name.text, вонзаться);

export { вонзаться };