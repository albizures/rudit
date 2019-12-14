import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проявиться: PerfectVerb = {
  name: Word('проявиться', 5),
  singular1stPerson: Word('проявлюсь', 6),
  singular2ndPerson: Word('проявишься', 3),
  singular3rdPerson: Word('проявится', 3),
  plural1stPerson: Word('проявимся', 3),
  plural2ndPerson: Word('проявитесь', 3),
  plural3rdPerson: Word('проявятся', 3),
  masculinePast: Word('проявился', 5),
  femininePast: Word('проявилась', 5),
  neuterPast: Word('проявилось', 5),
  pluralPast: Word('проявились', 5),
  imperativeInformal: Word('проявись', 5),
  imperativeFormal: Word('проявитесь', 5),
  imperfect: [],
};

perfectVerbs.set(проявиться.name.text, проявиться);

export { проявиться };