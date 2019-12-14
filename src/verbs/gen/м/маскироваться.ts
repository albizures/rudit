import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маскироваться: PerfectVerb = {
  name: Word('маскироваться', 8),
  singular1stPerson: Word('маскируюсь', 6),
  singular2ndPerson: Word('маскируешься', 6),
  singular3rdPerson: Word('маскируется', 6),
  plural1stPerson: Word('маскируемся', 6),
  plural2ndPerson: Word('маскируетесь', 6),
  plural3rdPerson: Word('маскируются', 6),
  masculinePast: Word('маскировался', 8),
  femininePast: Word('маскировалась', 8),
  neuterPast: Word('маскировалось', 8),
  pluralPast: Word('маскировались', 8),
  imperativeInformal: Word('маскируйся', 6),
  imperativeFormal: Word('маскируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(маскироваться.name.text, маскироваться);

export { маскироваться };