import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попудриться: PerfectVerb = {
  name: Word('попудриться', 3),
  singular1stPerson: Word('попудрюсь', 3),
  singular2ndPerson: Word('попудришься', 3),
  singular3rdPerson: Word('попудрится', 3),
  plural1stPerson: Word('попудримся', 3),
  plural2ndPerson: Word('попудритесь', 3),
  plural3rdPerson: Word('попудрятся', 3),
  masculinePast: Word('попудрился', 3),
  femininePast: Word('попудрилась', 3),
  neuterPast: Word('попудрилось', 3),
  pluralPast: Word('попудрились', 3),
  imperativeInformal: Word('попудрись', 3),
  imperativeFormal: Word('попудритесь', 3),
  imperfect: [],
};

perfectVerbs.set(попудриться.name.text, попудриться);

export { попудриться };