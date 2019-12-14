import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гордиться: PerfectVerb = {
  name: Word('гордиться', 4),
  singular1stPerson: Word('горжусь', 4),
  singular2ndPerson: Word('гордишься', 4),
  singular3rdPerson: Word('гордится', 4),
  plural1stPerson: Word('гордимся', 4),
  plural2ndPerson: Word('гордитесь', 4),
  plural3rdPerson: Word('гордятся', 4),
  masculinePast: Word('гордился', 4),
  femininePast: Word('гордилась', 4),
  neuterPast: Word('гордилось', 4),
  pluralPast: Word('гордились', 4),
  imperativeInformal: Word('гордись', 4),
  imperativeFormal: Word('гордитесь', 4),
  imperfect: [],
};

perfectVerbs.set(гордиться.name.text, гордиться);

export { гордиться };