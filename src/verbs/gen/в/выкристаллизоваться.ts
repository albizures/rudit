import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкристаллизоваться: PerfectVerb = {
  name: Word('выкристаллизоваться', 1),
  singular1stPerson: Word('выкристаллизуюсь', 1),
  singular2ndPerson: Word('выкристаллизуешься', 1),
  singular3rdPerson: Word('выкристаллизуется', 1),
  plural1stPerson: Word('выкристаллизуемся', 1),
  plural2ndPerson: Word('выкристаллизуетесь', 1),
  plural3rdPerson: Word('выкристаллизуются', 1),
  masculinePast: Word('выкристаллизовался', 1),
  femininePast: Word('выкристаллизовалась', 1),
  neuterPast: Word('выкристаллизовалось', 1),
  pluralPast: Word('выкристаллизовались', 1),
  imperativeInformal: Word('выкристаллизуйся', 1),
  imperativeFormal: Word('выкристаллизуйтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выкристаллизоваться.name.text, выкристаллизоваться);

export { выкристаллизоваться };