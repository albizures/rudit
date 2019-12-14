import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попользоваться: PerfectVerb = {
  name: Word('попользоваться', 3),
  singular1stPerson: Word('попользуюсь', 3),
  singular2ndPerson: Word('попользуешься', 3),
  singular3rdPerson: Word('попользуется', 3),
  plural1stPerson: Word('попользуемся', 3),
  plural2ndPerson: Word('попользуетесь', 3),
  plural3rdPerson: Word('попользуются', 3),
  masculinePast: Word('попользовался', 3),
  femininePast: Word('попользовалась', 3),
  neuterPast: Word('попользовалось', 3),
  pluralPast: Word('попользовались', 3),
  imperativeInformal: Word('попользуйся', 3),
  imperativeFormal: Word('попользуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(попользоваться.name.text, попользоваться);

export { попользоваться };