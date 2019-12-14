import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проломиться: PerfectVerb = {
  name: Word('проломиться', 6),
  singular1stPerson: Word('проломлюсь', 7),
  singular2ndPerson: Word('проломишься', 4),
  singular3rdPerson: Word('проломится', 4),
  plural1stPerson: Word('проломимся', 4),
  plural2ndPerson: Word('проломитесь', 4),
  plural3rdPerson: Word('проломятся', 4),
  masculinePast: Word('проломился', 6),
  femininePast: Word('проломилась', 6),
  neuterPast: Word('проломилось', 6),
  pluralPast: Word('проломились', 6),
  imperativeInformal: Word('проломись', 6),
  imperativeFormal: Word('проломитесь', 6),
  imperfect: [],
};

perfectVerbs.set(проломиться.name.text, проломиться);

export { проломиться };