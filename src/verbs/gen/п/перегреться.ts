import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегреться: PerfectVerb = {
  name: Word('перегреться', 6),
  singular1stPerson: Word('перегреюсь', 6),
  singular2ndPerson: Word('перегреешься', 6),
  singular3rdPerson: Word('перегреется', 6),
  plural1stPerson: Word('перегреемся', 6),
  plural2ndPerson: Word('перегреетесь', 6),
  plural3rdPerson: Word('перегреются', 6),
  masculinePast: Word('перегрелся', 6),
  femininePast: Word('перегрелась', 6),
  neuterPast: Word('перегрелось', 6),
  pluralPast: Word('перегрелись', 6),
  imperativeInformal: Word('перегрейся', 6),
  imperativeFormal: Word('перегрейтесь', 6),
  imperfect: [],
};

perfectVerbs.set(перегреться.name.text, перегреться);

export { перегреться };