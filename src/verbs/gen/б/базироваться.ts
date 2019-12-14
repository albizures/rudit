import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const базироваться: PerfectVerb = {
  name: Word('базироваться', 3),
  singular1stPerson: Word('базируюсь', 3),
  singular2ndPerson: Word('базируешься', 3),
  singular3rdPerson: Word('базируется', 3),
  plural1stPerson: Word('базируемся', 3),
  plural2ndPerson: Word('базируетесь', 3),
  plural3rdPerson: Word('базируются', 3),
  masculinePast: Word('базировался', 3),
  femininePast: Word('базировалась', 3),
  neuterPast: Word('базировалось', 3),
  pluralPast: Word('базировались', 3),
  imperativeInformal: Word('базируйся', 3),
  imperativeFormal: Word('базируйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(базироваться.name.text, базироваться);

export { базироваться };