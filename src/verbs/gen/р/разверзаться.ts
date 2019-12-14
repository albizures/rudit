import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разверзаться: PerfectVerb = {
  name: Word('разверзаться', 7),
  singular1stPerson: Word('разверзаюсь', 7),
  singular2ndPerson: Word('разверзаешься', 7),
  singular3rdPerson: Word('разверзается', 7),
  plural1stPerson: Word('разверзаемся', 7),
  plural2ndPerson: Word('разверзаетесь', 7),
  plural3rdPerson: Word('разверзаются', 7),
  masculinePast: Word('разверзался', 7),
  femininePast: Word('разверзалась', 7),
  neuterPast: Word('разверзалось', 7),
  pluralPast: Word('разверзались', 7),
  imperativeInformal: Word('разверзайся', 7),
  imperativeFormal: Word('разверзайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разверзаться.name.text, разверзаться);

export { разверзаться };