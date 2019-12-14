import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притаиться: PerfectVerb = {
  name: Word('притаиться', 5),
  singular1stPerson: Word('притаюсь', 5),
  singular2ndPerson: Word('притаишься', 5),
  singular3rdPerson: Word('притаится', 5),
  plural1stPerson: Word('притаимся', 5),
  plural2ndPerson: Word('притаитесь', 5),
  plural3rdPerson: Word('притаятся', 5),
  masculinePast: Word('притаился', 5),
  femininePast: Word('притаилась', 5),
  neuterPast: Word('притаилось', 5),
  pluralPast: Word('притаились', 5),
  imperativeInformal: Word('притаись', 5),
  imperativeFormal: Word('притаитесь', 5),
  imperfect: [],
};

perfectVerbs.set(притаиться.name.text, притаиться);

export { притаиться };