import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истосковаться: PerfectVerb = {
  name: Word('истосковаться', 8),
  singular1stPerson: Word('истоскуюсь', 6),
  singular2ndPerson: Word('истоскуешься', 6),
  singular3rdPerson: Word('истоскуется', 6),
  plural1stPerson: Word('истоскуемся', 6),
  plural2ndPerson: Word('истоскуетесь', 6),
  plural3rdPerson: Word('истоскуются', 6),
  masculinePast: Word('истосковался', 8),
  femininePast: Word('истосковалась', 8),
  neuterPast: Word('истосковалось', 8),
  pluralPast: Word('истосковались', 8),
  imperativeInformal: Word('истоскуйся', 6),
  imperativeFormal: Word('истоскуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(истосковаться.name.text, истосковаться);

export { истосковаться };