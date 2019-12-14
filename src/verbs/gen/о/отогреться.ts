import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отогреться: PerfectVerb = {
  name: Word('отогреться', 5),
  singular1stPerson: Word('отогреюсь', 5),
  singular2ndPerson: Word('отогреешься', 5),
  singular3rdPerson: Word('отогреется', 5),
  plural1stPerson: Word('отогреемся', 5),
  plural2ndPerson: Word('отогреетесь', 5),
  plural3rdPerson: Word('отогреются', 5),
  masculinePast: Word('отогрелся', 5),
  femininePast: Word('отогрелась', 5),
  neuterPast: Word('отогрелось', 5),
  pluralPast: Word('отогрелись', 5),
  imperativeInformal: Word('отогрейся', 5),
  imperativeFormal: Word('отогрейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отогреться.name.text, отогреться);

export { отогреться };