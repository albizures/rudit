import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пороться: PerfectVerb = {
  name: Word('пороться', 3),
  singular1stPerson: Word('порюсь', 3),
  singular2ndPerson: Word('порешься', 1),
  singular3rdPerson: Word('порется', 1),
  plural1stPerson: Word('поремся', 1),
  plural2ndPerson: Word('поретесь', 1),
  plural3rdPerson: Word('порются', 1),
  masculinePast: Word('поролся', 3),
  femininePast: Word('поролась', 3),
  neuterPast: Word('поролось', 3),
  pluralPast: Word('поролись', 3),
  imperativeInformal: Word('порись', 3),
  imperativeFormal: Word('поритесь', 3),
  imperfect: [],
};

perfectVerbs.set(пороться.name.text, пороться);

export { пороться };