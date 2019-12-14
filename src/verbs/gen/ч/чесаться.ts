import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чесаться: PerfectVerb = {
  name: Word('чесаться', 3),
  singular1stPerson: Word('чешусь', 3),
  singular2ndPerson: Word('чешешься', 1),
  singular3rdPerson: Word('чешется', 1),
  plural1stPerson: Word('чешемся', 1),
  plural2ndPerson: Word('чешетесь', 1),
  plural3rdPerson: Word('чешутся', 1),
  masculinePast: Word('чесался', 3),
  femininePast: Word('чесалась', 3),
  neuterPast: Word('чесалось', 3),
  pluralPast: Word('чесались', 3),
  imperativeInformal: Word('чешись', 3),
  imperativeFormal: Word('чешитесь', 3),
  imperfect: [],
};

perfectVerbs.set(чесаться.name.text, чесаться);

export { чесаться };