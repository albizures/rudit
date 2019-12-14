import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исцарапаться: PerfectVerb = {
  name: Word('исцарапаться', 5),
  singular1stPerson: Word('исцарапаюсь', 5),
  singular2ndPerson: Word('исцарапаешься', 5),
  singular3rdPerson: Word('исцарапается', 5),
  plural1stPerson: Word('исцарапаемся', 5),
  plural2ndPerson: Word('исцарапаетесь', 5),
  plural3rdPerson: Word('исцарапаются', 5),
  masculinePast: Word('исцарапался', 5),
  femininePast: Word('исцарапалась', 5),
  neuterPast: Word('исцарапалось', 5),
  pluralPast: Word('исцарапались', 5),
  imperativeInformal: Word('исцарапайся', 5),
  imperativeFormal: Word('исцарапайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(исцарапаться.name.text, исцарапаться);

export { исцарапаться };