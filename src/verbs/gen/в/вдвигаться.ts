import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдвигаться: PerfectVerb = {
  name: Word('вдвигаться', 5),
  singular1stPerson: Word('вдвигаюсь', 5),
  singular2ndPerson: Word('вдвигаешься', 5),
  singular3rdPerson: Word('вдвигается', 5),
  plural1stPerson: Word('вдвигаемся', 5),
  plural2ndPerson: Word('вдвигаетесь', 5),
  plural3rdPerson: Word('вдвигаются', 5),
  masculinePast: Word('вдвигался', 5),
  femininePast: Word('вдвигалась', 5),
  neuterPast: Word('вдвигалось', 5),
  pluralPast: Word('вдвигались', 5),
  imperativeInformal: Word('вдвигайся', 5),
  imperativeFormal: Word('вдвигайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вдвигаться.name.text, вдвигаться);

export { вдвигаться };