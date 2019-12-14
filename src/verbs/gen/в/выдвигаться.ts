import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдвигаться: PerfectVerb = {
  name: Word('выдвигаться', 6),
  singular1stPerson: Word('выдвигаюсь', 6),
  singular2ndPerson: Word('выдвигаешься', 6),
  singular3rdPerson: Word('выдвигается', 6),
  plural1stPerson: Word('выдвигаемся', 6),
  plural2ndPerson: Word('выдвигаетесь', 6),
  plural3rdPerson: Word('выдвигаются', 6),
  masculinePast: Word('выдвигался', 6),
  femininePast: Word('выдвигалась', 6),
  neuterPast: Word('выдвигалось', 6),
  pluralPast: Word('выдвигались', 6),
  imperativeInformal: Word('выдвигайся', 6),
  imperativeFormal: Word('выдвигайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(выдвигаться.name.text, выдвигаться);

export { выдвигаться };