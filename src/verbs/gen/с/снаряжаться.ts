import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снаряжаться: PerfectVerb = {
  name: Word('снаряжаться', 6),
  singular1stPerson: Word('снаряжаюсь', 6),
  singular2ndPerson: Word('снаряжаешься', 6),
  singular3rdPerson: Word('снаряжается', 6),
  plural1stPerson: Word('снаряжаемся', 6),
  plural2ndPerson: Word('снаряжаетесь', 6),
  plural3rdPerson: Word('снаряжаются', 6),
  masculinePast: Word('снаряжался', 6),
  femininePast: Word('снаряжалась', 6),
  neuterPast: Word('снаряжалось', 6),
  pluralPast: Word('снаряжались', 6),
  imperativeInformal: Word('снаряжайся', 6),
  imperativeFormal: Word('снаряжайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(снаряжаться.name.text, снаряжаться);

export { снаряжаться };