import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проездиться: PerfectVerb = {
  name: Word('проездиться', 3),
  singular1stPerson: Word('проезжусь', 3),
  singular2ndPerson: Word('проездишься', 3),
  singular3rdPerson: Word('проездится', 3),
  plural1stPerson: Word('проездимся', 3),
  plural2ndPerson: Word('проездитесь', 3),
  plural3rdPerson: Word('проездятся', 3),
  masculinePast: Word('проездился', 3),
  femininePast: Word('проездилась', 3),
  neuterPast: Word('проездилось', 3),
  pluralPast: Word('проездились', 3),
  imperativeInformal: Word('проездись', 3),
  imperativeFormal: Word('проездитесь', 3),
  imperfect: [],
};

perfectVerbs.set(проездиться.name.text, проездиться);

export { проездиться };