import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const образоваться: PerfectVerb = {
  name: Word('образоваться', 7),
  singular1stPerson: Word('образуюсь', 5),
  singular2ndPerson: Word('образуешься', 5),
  singular3rdPerson: Word('образуется', 5),
  plural1stPerson: Word('образуемся', 5),
  plural2ndPerson: Word('образуетесь', 5),
  plural3rdPerson: Word('образуются', 5),
  masculinePast: Word('образовался', 7),
  femininePast: Word('образовалась', 7),
  neuterPast: Word('образовалось', 7),
  pluralPast: Word('образовались', 7),
  imperativeInformal: Word('образуйся', 5),
  imperativeFormal: Word('образуйтесь', 5),
  imperfect: ['образовываться'],
};

perfectVerbs.set(образоваться.name.text, образоваться);

export { образоваться };