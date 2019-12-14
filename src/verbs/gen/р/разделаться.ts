import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разделаться: PerfectVerb = {
  name: Word('разделаться', 4),
  singular1stPerson: Word('разделаюсь', 4),
  singular2ndPerson: Word('разделаешься', 4),
  singular3rdPerson: Word('разделается', 4),
  plural1stPerson: Word('разделаемся', 4),
  plural2ndPerson: Word('разделаетесь', 4),
  plural3rdPerson: Word('разделаются', 4),
  masculinePast: Word('разделался', 4),
  femininePast: Word('разделалась', 4),
  neuterPast: Word('разделалось', 4),
  pluralPast: Word('разделались', 4),
  imperativeInformal: Word('разделайся', 4),
  imperativeFormal: Word('разделайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разделаться.name.text, разделаться);

export { разделаться };