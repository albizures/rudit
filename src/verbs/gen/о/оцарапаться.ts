import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оцарапаться: PerfectVerb = {
  name: Word('оцарапаться', 4),
  singular1stPerson: Word('оцарапаюсь', 4),
  singular2ndPerson: Word('оцарапаешься', 4),
  singular3rdPerson: Word('оцарапается', 4),
  plural1stPerson: Word('оцарапаемся', 4),
  plural2ndPerson: Word('оцарапаетесь', 4),
  plural3rdPerson: Word('оцарапаются', 4),
  masculinePast: Word('оцарапался', 4),
  femininePast: Word('оцарапалась', 4),
  neuterPast: Word('оцарапалось', 4),
  pluralPast: Word('оцарапались', 4),
  imperativeInformal: Word('оцарапайся', 4),
  imperativeFormal: Word('оцарапайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(оцарапаться.name.text, оцарапаться);

export { оцарапаться };