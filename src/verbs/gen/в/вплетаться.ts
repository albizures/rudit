import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вплетаться: PerfectVerb = {
  name: Word('вплетаться', 5),
  singular1stPerson: Word('вплетаюсь', 5),
  singular2ndPerson: Word('вплетаешься', 5),
  singular3rdPerson: Word('вплетается', 5),
  plural1stPerson: Word('вплетаемся', 5),
  plural2ndPerson: Word('вплетаетесь', 5),
  plural3rdPerson: Word('вплетаются', 5),
  masculinePast: Word('вплетался', 5),
  femininePast: Word('вплеталась', 5),
  neuterPast: Word('вплеталось', 5),
  pluralPast: Word('вплетались', 5),
  imperativeInformal: Word('вплетайся', 5),
  imperativeFormal: Word('вплетайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вплетаться.name.text, вплетаться);

export { вплетаться };