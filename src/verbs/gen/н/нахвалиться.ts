import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахвалиться: PerfectVerb = {
  name: Word('нахвалиться', 6),
  singular1stPerson: Word('нахвалюсь', 6),
  singular2ndPerson: Word('нахвалишься', 4),
  singular3rdPerson: Word('нахвалится', 4),
  plural1stPerson: Word('нахвалимся', 4),
  plural2ndPerson: Word('нахвалитесь', 4),
  plural3rdPerson: Word('нахвалятся', 4),
  masculinePast: Word('нахвалился', 6),
  femininePast: Word('нахвалилась', 6),
  neuterPast: Word('нахвалилось', 6),
  pluralPast: Word('нахвалились', 6),
  imperativeInformal: Word('нахвались', 6),
  imperativeFormal: Word('нахвалитесь', 6),
  imperfect: [],
};

perfectVerbs.set(нахвалиться.name.text, нахвалиться);

export { нахвалиться };