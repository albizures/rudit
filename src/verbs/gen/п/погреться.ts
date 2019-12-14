import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погреться: PerfectVerb = {
  name: Word('погреться', 4),
  singular1stPerson: Word('погреюсь', 4),
  singular2ndPerson: Word('погреешься', 4),
  singular3rdPerson: Word('погреется', 4),
  plural1stPerson: Word('погреемся', 4),
  plural2ndPerson: Word('погреетесь', 4),
  plural3rdPerson: Word('погреются', 4),
  masculinePast: Word('погрелся', 4),
  femininePast: Word('погрелась', 4),
  neuterPast: Word('погрелось', 4),
  pluralPast: Word('погрелись', 4),
  imperativeInformal: Word('погрейся', 4),
  imperativeFormal: Word('погрейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(погреться.name.text, погреться);

export { погреться };