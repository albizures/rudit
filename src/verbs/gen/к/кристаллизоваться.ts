import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кристаллизоваться: PerfectVerb = {
  name: Word('кристаллизоваться', 12),
  singular1stPerson: Word('кристаллизуюсь', 10),
  singular2ndPerson: Word('кристаллизуешься', 10),
  singular3rdPerson: Word('кристаллизуется', 10),
  plural1stPerson: Word('кристаллизуемся', 10),
  plural2ndPerson: Word('кристаллизуетесь', 10),
  plural3rdPerson: Word('кристаллизуются', 10),
  masculinePast: Word('кристаллизовался', 12),
  femininePast: Word('кристаллизовалась', 12),
  neuterPast: Word('кристаллизовалось', 12),
  pluralPast: Word('кристаллизовались', 12),
  imperativeInformal: Word('кристаллизуйся', 10),
  imperativeFormal: Word('кристаллизуйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(кристаллизоваться.name.text, кристаллизоваться);

export { кристаллизоваться };