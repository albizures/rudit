import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затаиться: PerfectVerb = {
  name: Word('затаиться', 4),
  singular1stPerson: Word('затаюсь', 4),
  singular2ndPerson: Word('затаишься', 4),
  singular3rdPerson: Word('затаится', 4),
  plural1stPerson: Word('затаимся', 4),
  plural2ndPerson: Word('затаитесь', 4),
  plural3rdPerson: Word('затаятся', 4),
  masculinePast: Word('затаился', 4),
  femininePast: Word('затаилась', 4),
  neuterPast: Word('затаилось', 4),
  pluralPast: Word('затаились', 4),
  imperativeInformal: Word('затаись', 4),
  imperativeFormal: Word('затаитесь', 4),
  imperfect: [],
};

perfectVerbs.set(затаиться.name.text, затаиться);

export { затаиться };