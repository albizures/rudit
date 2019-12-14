import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдвигаться: PerfectVerb = {
  name: Word('сдвигаться', 5),
  singular1stPerson: Word('сдвигаюсь', 5),
  singular2ndPerson: Word('сдвигаешься', 5),
  singular3rdPerson: Word('сдвигается', 5),
  plural1stPerson: Word('сдвигаемся', 5),
  plural2ndPerson: Word('сдвигаетесь', 5),
  plural3rdPerson: Word('сдвигаются', 5),
  masculinePast: Word('сдвигался', 5),
  femininePast: Word('сдвигалась', 5),
  neuterPast: Word('сдвигалось', 5),
  pluralPast: Word('сдвигались', 5),
  imperativeInformal: Word('сдвигайся', 5),
  imperativeFormal: Word('сдвигайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сдвигаться.name.text, сдвигаться);

export { сдвигаться };