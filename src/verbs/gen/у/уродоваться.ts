import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уродоваться: PerfectVerb = {
  name: Word('уродоваться', 2),
  singular1stPerson: Word('уродуюсь', 2),
  singular2ndPerson: Word('уродуешься', 2),
  singular3rdPerson: Word('уродуется', 2),
  plural1stPerson: Word('уродуемся', 2),
  plural2ndPerson: Word('уродуетесь', 2),
  plural3rdPerson: Word('уродуются', 2),
  masculinePast: Word('уродовался', 2),
  femininePast: Word('уродовалась', 2),
  neuterPast: Word('уродовалось', 2),
  pluralPast: Word('уродовались', 2),
  imperativeInformal: Word('уродуйся', 2),
  imperativeFormal: Word('уродуйтесь', 2),
  imperfect: [],
};

perfectVerbs.set(уродоваться.name.text, уродоваться);

export { уродоваться };