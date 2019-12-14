import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвигаться: PerfectVerb = {
  name: Word('подвигаться', 6),
  singular1stPerson: Word('подвигаюсь', 6),
  singular2ndPerson: Word('подвигаешься', 6),
  singular3rdPerson: Word('подвигается', 6),
  plural1stPerson: Word('подвигаемся', 6),
  plural2ndPerson: Word('подвигаетесь', 6),
  plural3rdPerson: Word('подвигаются', 6),
  masculinePast: Word('подвигался', 6),
  femininePast: Word('подвигалась', 6),
  neuterPast: Word('подвигалось', 6),
  pluralPast: Word('подвигались', 6),
  imperativeInformal: Word('подвигайся', 6),
  imperativeFormal: Word('подвигайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подвигаться.name.text, подвигаться);

export { подвигаться };