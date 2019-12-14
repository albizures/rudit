import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разодеться: PerfectVerb = {
  name: Word('разодеться', 5),
  singular1stPerson: Word('разоденусь', 5),
  singular2ndPerson: Word('разоденешься', 5),
  singular3rdPerson: Word('разоденется', 5),
  plural1stPerson: Word('разоденемся', 5),
  plural2ndPerson: Word('разоденетесь', 5),
  plural3rdPerson: Word('разоденутся', 5),
  masculinePast: Word('разоделся', 5),
  femininePast: Word('разоделась', 5),
  neuterPast: Word('разоделось', 5),
  pluralPast: Word('разоделись', 5),
  imperativeInformal: Word('разоденься', 5),
  imperativeFormal: Word('разоденьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разодеться.name.text, разодеться);

export { разодеться };