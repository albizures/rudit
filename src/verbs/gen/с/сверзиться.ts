import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сверзиться: PerfectVerb = {
  name: Word('сверзиться', 2),
  singular1stPerson: Word('свержусь', 2),
  singular2ndPerson: Word('сверзишься', 2),
  singular3rdPerson: Word('сверзится', 2),
  plural1stPerson: Word('сверзимся', 2),
  plural2ndPerson: Word('сверзитесь', 2),
  plural3rdPerson: Word('сверзятся', 2),
  masculinePast: Word('сверзился', 2),
  femininePast: Word('сверзилась', 2),
  neuterPast: Word('сверзилось', 2),
  pluralPast: Word('сверзились', 2),
  imperativeInformal: Word('сверзись', 2),
  imperativeFormal: Word('сверзитесь', 2),
  imperfect: [],
};

perfectVerbs.set(сверзиться.name.text, сверзиться);

export { сверзиться };