import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const котироваться: PerfectVerb = {
  name: Word('котироваться', 3),
  singular1stPerson: Word('котируюсь', 3),
  singular2ndPerson: Word('котируешься', 3),
  singular3rdPerson: Word('котируется', 3),
  plural1stPerson: Word('котируемся', 3),
  plural2ndPerson: Word('котируетесь', 3),
  plural3rdPerson: Word('котируются', 3),
  masculinePast: Word('котировался', 3),
  femininePast: Word('котировалась', 3),
  neuterPast: Word('котировалось', 3),
  pluralPast: Word('котировались', 3),
  imperativeInformal: Word('котируйся', 3),
  imperativeFormal: Word('котируйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(котироваться.name.text, котироваться);

export { котироваться };