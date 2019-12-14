import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгорячиться: PerfectVerb = {
  name: Word('разгорячиться', 8),
  singular1stPerson: Word('разгорячусь', 8),
  singular2ndPerson: Word('разгорячишься', 8),
  singular3rdPerson: Word('разгорячится', 8),
  plural1stPerson: Word('разгорячимся', 8),
  plural2ndPerson: Word('разгорячитесь', 8),
  plural3rdPerson: Word('разгорячатся', 8),
  masculinePast: Word('разгорячился', 8),
  femininePast: Word('разгорячилась', 8),
  neuterPast: Word('разгорячилось', 8),
  pluralPast: Word('разгорячились', 8),
  imperativeInformal: Word('разгорячись', 8),
  imperativeFormal: Word('разгорячитесь', 8),
  imperfect: [],
};

perfectVerbs.set(разгорячиться.name.text, разгорячиться);

export { разгорячиться };