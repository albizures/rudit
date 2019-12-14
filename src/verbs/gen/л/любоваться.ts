import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const любоваться: PerfectVerb = {
  name: Word('любоваться', 5),
  singular1stPerson: Word('любуюсь', 3),
  singular2ndPerson: Word('любуешься', 3),
  singular3rdPerson: Word('любуется', 3),
  plural1stPerson: Word('любуемся', 3),
  plural2ndPerson: Word('любуетесь', 3),
  plural3rdPerson: Word('любуются', 3),
  masculinePast: Word('любовался', 5),
  femininePast: Word('любовалась', 5),
  neuterPast: Word('любовалось', 5),
  pluralPast: Word('любовались', 5),
  imperativeInformal: Word('любуйся', 3),
  imperativeFormal: Word('любуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(любоваться.name.text, любоваться);

export { любоваться };