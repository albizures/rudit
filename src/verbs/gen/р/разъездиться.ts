import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъездиться: PerfectVerb = {
  name: Word('разъездиться', 4),
  singular1stPerson: Word('разъезжусь', 4),
  singular2ndPerson: Word('разъездишься', 4),
  singular3rdPerson: Word('разъездится', 4),
  plural1stPerson: Word('разъездимся', 4),
  plural2ndPerson: Word('разъездитесь', 4),
  plural3rdPerson: Word('разъездятся', 4),
  masculinePast: Word('разъездился', 4),
  femininePast: Word('разъездилась', 4),
  neuterPast: Word('разъездилось', 4),
  pluralPast: Word('разъездились', 4),
  imperativeInformal: Word('разъездись', 4),
  imperativeFormal: Word('разъездитесь', 4),
  imperfect: [],
};

perfectVerbs.set(разъездиться.name.text, разъездиться);

export { разъездиться };