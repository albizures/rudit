import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обзаводиться: PerfectVerb = {
  name: Word('обзаводиться', 7),
  singular1stPerson: Word('обзавожусь', 7),
  singular2ndPerson: Word('обзаводишься', 5),
  singular3rdPerson: Word('обзаводится', 5),
  plural1stPerson: Word('обзаводимся', 5),
  plural2ndPerson: Word('обзаводитесь', 5),
  plural3rdPerson: Word('обзаводятся', 5),
  masculinePast: Word('обзаводился', 7),
  femininePast: Word('обзаводилась', 7),
  neuterPast: Word('обзаводилось', 7),
  pluralPast: Word('обзаводились', 7),
  imperativeInformal: Word('обзаводись', 7),
  imperativeFormal: Word('обзаводитесь', 7),
  imperfect: [],
};

perfectVerbs.set(обзаводиться.name.text, обзаводиться);

export { обзаводиться };