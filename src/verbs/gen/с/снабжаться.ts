import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снабжаться: PerfectVerb = {
  name: Word('снабжаться', 5),
  singular1stPerson: Word('снабжаюсь', 5),
  singular2ndPerson: Word('снабжаешься', 5),
  singular3rdPerson: Word('снабжается', 5),
  plural1stPerson: Word('снабжаемся', 5),
  plural2ndPerson: Word('снабжаетесь', 5),
  plural3rdPerson: Word('снабжаются', 5),
  masculinePast: Word('снабжался', 5),
  femininePast: Word('снабжалась', 5),
  neuterPast: Word('снабжалось', 5),
  pluralPast: Word('снабжались', 5),
  imperativeInformal: Word('снабжайся', 5),
  imperativeFormal: Word('снабжайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(снабжаться.name.text, снабжаться);

export { снабжаться };