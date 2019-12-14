import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const швартоваться: PerfectVerb = {
  name: Word('швартоваться', 7),
  singular1stPerson: Word('швартуюсь', 5),
  singular2ndPerson: Word('швартуешься', 5),
  singular3rdPerson: Word('швартуется', 5),
  plural1stPerson: Word('швартуемся', 5),
  plural2ndPerson: Word('швартуетесь', 5),
  plural3rdPerson: Word('швартуются', 5),
  masculinePast: Word('швартовался', 7),
  femininePast: Word('швартовалась', 7),
  neuterPast: Word('швартовалось', 7),
  pluralPast: Word('швартовались', 7),
  imperativeInformal: Word('швартуйся', 5),
  imperativeFormal: Word('швартуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(швартоваться.name.text, швартоваться);

export { швартоваться };