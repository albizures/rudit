import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рисоваться: PerfectVerb = {
  name: Word('рисоваться', 5),
  singular1stPerson: Word('рисуюсь', 3),
  singular2ndPerson: Word('рисуешься', 3),
  singular3rdPerson: Word('рисуется', 3),
  plural1stPerson: Word('рисуемся', 3),
  plural2ndPerson: Word('рисуетесь', 3),
  plural3rdPerson: Word('рисуются', 3),
  masculinePast: Word('рисовался', 5),
  femininePast: Word('рисовалась', 5),
  neuterPast: Word('рисовалось', 5),
  pluralPast: Word('рисовались', 5),
  imperativeInformal: Word('рисуйся', 3),
  imperativeFormal: Word('рисуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(рисоваться.name.text, рисоваться);

export { рисоваться };