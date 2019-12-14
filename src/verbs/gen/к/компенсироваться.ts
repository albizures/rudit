import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const компенсироваться: PerfectVerb = {
  name: Word('компенсироваться', 7),
  singular1stPerson: Word('компенсируюсь', 7),
  singular2ndPerson: Word('компенсируешься', 7),
  singular3rdPerson: Word('компенсируется', 7),
  plural1stPerson: Word('компенсируемся', 7),
  plural2ndPerson: Word('компенсируетесь', 7),
  plural3rdPerson: Word('компенсируются', 7),
  masculinePast: Word('компенсировался', 7),
  femininePast: Word('компенсировалась', 7),
  neuterPast: Word('компенсировалось', 7),
  pluralPast: Word('компенсировались', 7),
  imperativeInformal: Word('компенсируйся', 7),
  imperativeFormal: Word('компенсируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(компенсироваться.name.text, компенсироваться);

export { компенсироваться };