import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полюбоваться: PerfectVerb = {
  name: Word('полюбоваться', 7),
  singular1stPerson: Word('полюбуюсь', 5),
  singular2ndPerson: Word('полюбуешься', 5),
  singular3rdPerson: Word('полюбуется', 5),
  plural1stPerson: Word('полюбуемся', 5),
  plural2ndPerson: Word('полюбуетесь', 5),
  plural3rdPerson: Word('полюбуются', 5),
  masculinePast: Word('полюбовался', 7),
  femininePast: Word('полюбовалась', 7),
  neuterPast: Word('полюбовалось', 7),
  pluralPast: Word('полюбовались', 7),
  imperativeInformal: Word('полюбуйся', 5),
  imperativeFormal: Word('полюбуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(полюбоваться.name.text, полюбоваться);

export { полюбоваться };