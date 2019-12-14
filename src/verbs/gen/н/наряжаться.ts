import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наряжаться: PerfectVerb = {
  name: Word('наряжаться', 5),
  singular1stPerson: Word('наряжаюсь', 5),
  singular2ndPerson: Word('наряжаешься', 5),
  singular3rdPerson: Word('наряжается', 5),
  plural1stPerson: Word('наряжаемся', 5),
  plural2ndPerson: Word('наряжаетесь', 5),
  plural3rdPerson: Word('наряжаются', 5),
  masculinePast: Word('наряжался', 5),
  femininePast: Word('наряжалась', 5),
  neuterPast: Word('наряжалось', 5),
  pluralPast: Word('наряжались', 5),
  imperativeInformal: Word('наряжайся', 5),
  imperativeFormal: Word('наряжайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(наряжаться.name.text, наряжаться);

export { наряжаться };