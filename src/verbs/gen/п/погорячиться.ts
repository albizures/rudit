import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погорячиться: PerfectVerb = {
  name: Word('погорячиться', 7),
  singular1stPerson: Word('погорячусь', 7),
  singular2ndPerson: Word('погорячишься', 7),
  singular3rdPerson: Word('погорячится', 7),
  plural1stPerson: Word('погорячимся', 7),
  plural2ndPerson: Word('погорячитесь', 7),
  plural3rdPerson: Word('погорячатся', 7),
  masculinePast: Word('погорячился', 7),
  femininePast: Word('погорячилась', 7),
  neuterPast: Word('погорячилось', 7),
  pluralPast: Word('погорячились', 7),
  imperativeInformal: Word('погорячись', 7),
  imperativeFormal: Word('погорячитесь', 7),
  imperfect: [],
};

perfectVerbs.set(погорячиться.name.text, погорячиться);

export { погорячиться };