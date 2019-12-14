import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разделиться: PerfectVerb = {
  name: Word('разделиться', 6),
  singular1stPerson: Word('разделюсь', 6),
  singular2ndPerson: Word('разделишься', 4),
  singular3rdPerson: Word('разделится', 4),
  plural1stPerson: Word('разделимся', 4),
  plural2ndPerson: Word('разделитесь', 4),
  plural3rdPerson: Word('разделятся', 4),
  masculinePast: Word('разделился', 6),
  femininePast: Word('разделилась', 6),
  neuterPast: Word('разделилось', 6),
  pluralPast: Word('разделились', 6),
  imperativeInformal: Word('разделись', 6),
  imperativeFormal: Word('разделитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разделиться.name.text, разделиться);

export { разделиться };