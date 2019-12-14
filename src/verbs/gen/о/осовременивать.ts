import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осовременивать: PerfectVerb = {
  name: Word('осовременивать', 7),
  singular1stPerson: Word('осовремениваю', 7),
  singular2ndPerson: Word('осовремениваешь', 7),
  singular3rdPerson: Word('осовременивает', 7),
  plural1stPerson: Word('осовремениваем', 7),
  plural2ndPerson: Word('осовремениваете', 7),
  plural3rdPerson: Word('осовременивают', 7),
  masculinePast: Word('осовременивал', 7),
  femininePast: Word('осовременивала', 7),
  neuterPast: Word('осовременивало', 7),
  pluralPast: Word('осовременивали', 7),
  imperativeInformal: Word('осовременивай', 7),
  imperativeFormal: Word('осовременивайте', 7),
  imperfect: [],
};

perfectVerbs.set(осовременивать.name.text, осовременивать);

export { осовременивать };