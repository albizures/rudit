import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загорячиться: PerfectVerb = {
  name: Word('загорячиться', 7),
  singular1stPerson: Word('загорячусь', 7),
  singular2ndPerson: Word('загорячишься', 7),
  singular3rdPerson: Word('загорячится', 7),
  plural1stPerson: Word('загорячимся', 7),
  plural2ndPerson: Word('загорячитесь', 7),
  plural3rdPerson: Word('загорячатся', 7),
  masculinePast: Word('загорячился', 7),
  femininePast: Word('загорячилась', 7),
  neuterPast: Word('загорячилось', 7),
  pluralPast: Word('загорячились', 7),
  imperativeInformal: Word('загорячись', 7),
  imperativeFormal: Word('загорячитесь', 7),
  imperfect: [],
};

perfectVerbs.set(загорячиться.name.text, загорячиться);

export { загорячиться };