import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согреться: PerfectVerb = {
  name: Word('согреться', 4),
  singular1stPerson: Word('согреюсь', 4),
  singular2ndPerson: Word('согреешься', 4),
  singular3rdPerson: Word('согреется', 4),
  plural1stPerson: Word('согреемся', 4),
  plural2ndPerson: Word('согреетесь', 4),
  plural3rdPerson: Word('согреются', 4),
  masculinePast: Word('согрелся', 4),
  femininePast: Word('согрелась', 4),
  neuterPast: Word('согрелось', 4),
  pluralPast: Word('согрелись', 4),
  imperativeInformal: Word('согрейся', 4),
  imperativeFormal: Word('согрейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(согреться.name.text, согреться);

export { согреться };