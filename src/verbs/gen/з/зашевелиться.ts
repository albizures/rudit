import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашевелиться: PerfectVerb = {
  name: Word('зашевелиться', 7),
  singular1stPerson: Word('зашевелюсь', 7),
  singular2ndPerson: Word('зашевелишься', 7),
  singular3rdPerson: Word('зашевелится', 7),
  plural1stPerson: Word('зашевелимся', 7),
  plural2ndPerson: Word('зашевелитесь', 7),
  plural3rdPerson: Word('зашевелятся', 7),
  masculinePast: Word('зашевелился', 7),
  femininePast: Word('зашевелилась', 7),
  neuterPast: Word('зашевелилось', 7),
  pluralPast: Word('зашевелились', 7),
  imperativeInformal: Word('зашевелись', 7),
  imperativeFormal: Word('зашевелитесь', 7),
  imperfect: [],
};

perfectVerbs.set(зашевелиться.name.text, зашевелиться);

export { зашевелиться };