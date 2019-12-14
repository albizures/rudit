import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проветриться: PerfectVerb = {
  name: Word('проветриться', 4),
  singular1stPerson: Word('проветрюсь', 4),
  singular2ndPerson: Word('проветришься', 4),
  singular3rdPerson: Word('проветрится', 4),
  plural1stPerson: Word('проветримся', 4),
  plural2ndPerson: Word('проветритесь', 4),
  plural3rdPerson: Word('проветрятся', 4),
  masculinePast: Word('проветрился', 4),
  femininePast: Word('проветрилась', 4),
  neuterPast: Word('проветрилось', 4),
  pluralPast: Word('проветрились', 4),
  imperativeInformal: Word('проветрись', 4),
  imperativeFormal: Word('проветритесь', 4),
  imperfect: [],
};

perfectVerbs.set(проветриться.name.text, проветриться);

export { проветриться };