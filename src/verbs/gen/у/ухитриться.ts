import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухитриться: PerfectVerb = {
  name: Word('ухитриться', 5),
  singular1stPerson: Word('ухитрюсь', 5),
  singular2ndPerson: Word('ухитришься', 5),
  singular3rdPerson: Word('ухитрится', 5),
  plural1stPerson: Word('ухитримся', 5),
  plural2ndPerson: Word('ухитритесь', 5),
  plural3rdPerson: Word('ухитрятся', 5),
  masculinePast: Word('ухитрился', 5),
  femininePast: Word('ухитрилась', 5),
  neuterPast: Word('ухитрилось', 5),
  pluralPast: Word('ухитрились', 5),
  imperativeInformal: Word('ухитрись', 5),
  imperativeFormal: Word('ухитритесь', 5),
  imperfect: [],
};

perfectVerbs.set(ухитриться.name.text, ухитриться);

export { ухитриться };