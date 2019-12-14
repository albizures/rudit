import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исхитриться: PerfectVerb = {
  name: Word('исхитриться', 6),
  singular1stPerson: Word('исхитрюсь', 6),
  singular2ndPerson: Word('исхитришься', 6),
  singular3rdPerson: Word('исхитрится', 6),
  plural1stPerson: Word('исхитримся', 6),
  plural2ndPerson: Word('исхитритесь', 6),
  plural3rdPerson: Word('исхитрятся', 6),
  masculinePast: Word('исхитрился', 6),
  femininePast: Word('исхитрилась', 6),
  neuterPast: Word('исхитрилось', 6),
  pluralPast: Word('исхитрились', 6),
  imperativeInformal: Word('исхитрись', 6),
  imperativeFormal: Word('исхитритесь', 6),
  imperfect: [],
};

perfectVerbs.set(исхитриться.name.text, исхитриться);

export { исхитриться };