import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрениться: PerfectVerb = {
  name: Word('накрениться', 6),
  singular1stPerson: Word('накренюсь', 6),
  singular2ndPerson: Word('накренишься', 6),
  singular3rdPerson: Word('накренится', 6),
  plural1stPerson: Word('накренимся', 6),
  plural2ndPerson: Word('накренитесь', 6),
  plural3rdPerson: Word('накренятся', 6),
  masculinePast: Word('накренился', 6),
  femininePast: Word('накренилась', 6),
  neuterPast: Word('накренилось', 6),
  pluralPast: Word('накренились', 6),
  imperativeInformal: Word('накренись', 6),
  imperativeFormal: Word('накренитесь', 6),
  imperfect: [],
};

perfectVerbs.set(накрениться.name.text, накрениться);

export { накрениться };