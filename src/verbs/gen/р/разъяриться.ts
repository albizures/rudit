import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъяриться: PerfectVerb = {
  name: Word('разъяриться', 6),
  singular1stPerson: Word('разъярюсь', 6),
  singular2ndPerson: Word('разъяришься', 6),
  singular3rdPerson: Word('разъярится', 6),
  plural1stPerson: Word('разъяримся', 6),
  plural2ndPerson: Word('разъяритесь', 6),
  plural3rdPerson: Word('разъярятся', 6),
  masculinePast: Word('разъярился', 6),
  femininePast: Word('разъярилась', 6),
  neuterPast: Word('разъярилось', 6),
  pluralPast: Word('разъярились', 6),
  imperativeInformal: Word('разъярись', 6),
  imperativeFormal: Word('разъяритесь', 6),
  imperfect: [],
};

perfectVerbs.set(разъяриться.name.text, разъяриться);

export { разъяриться };