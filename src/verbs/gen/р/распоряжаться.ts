import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распоряжаться: PerfectVerb = {
  name: Word('распоряжаться', 8),
  singular1stPerson: Word('распоряжаюсь', 8),
  singular2ndPerson: Word('распоряжаешься', 8),
  singular3rdPerson: Word('распоряжается', 8),
  plural1stPerson: Word('распоряжаемся', 8),
  plural2ndPerson: Word('распоряжаетесь', 8),
  plural3rdPerson: Word('распоряжаются', 8),
  masculinePast: Word('распоряжался', 8),
  femininePast: Word('распоряжалась', 8),
  neuterPast: Word('распоряжалось', 8),
  pluralPast: Word('распоряжались', 8),
  imperativeInformal: Word('распоряжайся', 8),
  imperativeFormal: Word('распоряжайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(распоряжаться.name.text, распоряжаться);

export { распоряжаться };