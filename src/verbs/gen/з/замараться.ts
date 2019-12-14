import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замараться: PerfectVerb = {
  name: Word('замараться', 5),
  singular1stPerson: Word('замараюсь', 5),
  singular2ndPerson: Word('замараешься', 5),
  singular3rdPerson: Word('замарается', 5),
  plural1stPerson: Word('замараемся', 5),
  plural2ndPerson: Word('замараетесь', 5),
  plural3rdPerson: Word('замараются', 5),
  masculinePast: Word('замарался', 5),
  femininePast: Word('замаралась', 5),
  neuterPast: Word('замаралось', 5),
  pluralPast: Word('замарались', 5),
  imperativeInformal: Word('замарайся', 5),
  imperativeFormal: Word('замарайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(замараться.name.text, замараться);

export { замараться };