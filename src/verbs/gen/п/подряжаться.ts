import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подряжаться: PerfectVerb = {
  name: Word('подряжаться', 6),
  singular1stPerson: Word('подряжаюсь', 6),
  singular2ndPerson: Word('подряжаешься', 6),
  singular3rdPerson: Word('подряжается', 6),
  plural1stPerson: Word('подряжаемся', 6),
  plural2ndPerson: Word('подряжаетесь', 6),
  plural3rdPerson: Word('подряжаются', 6),
  masculinePast: Word('подряжался', 6),
  femininePast: Word('подряжалась', 6),
  neuterPast: Word('подряжалось', 6),
  pluralPast: Word('подряжались', 6),
  imperativeInformal: Word('подряжайся', 6),
  imperativeFormal: Word('подряжайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подряжаться.name.text, подряжаться);

export { подряжаться };