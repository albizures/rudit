import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вожжаться: PerfectVerb = {
  name: Word('вожжаться', 4),
  singular1stPerson: Word('вожжаюсь', 4),
  singular2ndPerson: Word('вожжаешься', 4),
  singular3rdPerson: Word('вожжается', 4),
  plural1stPerson: Word('вожжаемся', 4),
  plural2ndPerson: Word('вожжаетесь', 4),
  plural3rdPerson: Word('вожжаются', 4),
  masculinePast: Word('вожжался', 4),
  femininePast: Word('вожжалась', 4),
  neuterPast: Word('вожжалось', 4),
  pluralPast: Word('вожжались', 4),
  imperativeInformal: Word('вожжайся', 4),
  imperativeFormal: Word('вожжайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вожжаться.name.text, вожжаться);

export { вожжаться };