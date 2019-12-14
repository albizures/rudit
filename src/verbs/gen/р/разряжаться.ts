import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разряжаться: PerfectVerb = {
  name: Word('разряжаться', 6),
  singular1stPerson: Word('разряжаюсь', 6),
  singular2ndPerson: Word('разряжаешься', 6),
  singular3rdPerson: Word('разряжается', 6),
  plural1stPerson: Word('разряжаемся', 6),
  plural2ndPerson: Word('разряжаетесь', 6),
  plural3rdPerson: Word('разряжаются', 6),
  masculinePast: Word('разряжался', 6),
  femininePast: Word('разряжалась', 6),
  neuterPast: Word('разряжалось', 6),
  pluralPast: Word('разряжались', 6),
  imperativeInformal: Word('разряжайся', 6),
  imperativeFormal: Word('разряжайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разряжаться.name.text, разряжаться);

export { разряжаться };