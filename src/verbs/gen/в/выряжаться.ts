import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выряжаться: PerfectVerb = {
  name: Word('выряжаться', 5),
  singular1stPerson: Word('выряжаюсь', 5),
  singular2ndPerson: Word('выряжаешься', 5),
  singular3rdPerson: Word('выряжается', 5),
  plural1stPerson: Word('выряжаемся', 5),
  plural2ndPerson: Word('выряжаетесь', 5),
  plural3rdPerson: Word('выряжаются', 5),
  masculinePast: Word('выряжался', 5),
  femininePast: Word('выряжалась', 5),
  neuterPast: Word('выряжалось', 5),
  pluralPast: Word('выряжались', 5),
  imperativeInformal: Word('выряжайся', 5),
  imperativeFormal: Word('выряжайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выряжаться.name.text, выряжаться);

export { выряжаться };