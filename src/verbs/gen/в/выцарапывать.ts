import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выцарапывать: PerfectVerb = {
  name: Word('выцарапывать', 5),
  singular1stPerson: Word('выцарапываю', 5),
  singular2ndPerson: Word('выцарапываешь', 5),
  singular3rdPerson: Word('выцарапывает', 5),
  plural1stPerson: Word('выцарапываем', 5),
  plural2ndPerson: Word('выцарапываете', 5),
  plural3rdPerson: Word('выцарапывают', 5),
  masculinePast: Word('выцарапывал', 5),
  femininePast: Word('выцарапывала', 5),
  neuterPast: Word('выцарапывало', 5),
  pluralPast: Word('выцарапывали', 5),
  imperativeInformal: Word('выцарапывай', 5),
  imperativeFormal: Word('выцарапывайте', 5),
  imperfect: [],
};

perfectVerbs.set(выцарапывать.name.text, выцарапывать);

export { выцарапывать };