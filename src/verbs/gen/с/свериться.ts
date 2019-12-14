import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свериться: PerfectVerb = {
  name: Word('свериться', 2),
  singular1stPerson: Word('сверюсь', 2),
  singular2ndPerson: Word('сверишься', 2),
  singular3rdPerson: Word('сверится', 2),
  plural1stPerson: Word('сверимся', 2),
  plural2ndPerson: Word('сверитесь', 2),
  plural3rdPerson: Word('сверятся', 2),
  masculinePast: Word('сверился', 2),
  femininePast: Word('сверилась', 2),
  neuterPast: Word('сверилось', 2),
  pluralPast: Word('сверились', 2),
  imperativeInformal: Word('сверься', 2),
  imperativeFormal: Word('сверьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(свериться.name.text, свериться);

export { свериться };