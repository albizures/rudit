import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const комбинироваться: PerfectVerb = {
  name: Word('комбинироваться', 6),
  singular1stPerson: Word('комбинируюсь', 6),
  singular2ndPerson: Word('комбинируешься', 6),
  singular3rdPerson: Word('комбинируется', 6),
  plural1stPerson: Word('комбинируемся', 6),
  plural2ndPerson: Word('комбинируетесь', 6),
  plural3rdPerson: Word('комбинируются', 6),
  masculinePast: Word('комбинировался', 6),
  femininePast: Word('комбинировалась', 6),
  neuterPast: Word('комбинировалось', 6),
  pluralPast: Word('комбинировались', 6),
  imperativeInformal: Word('комбинируйся', 6),
  imperativeFormal: Word('комбинируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(комбинироваться.name.text, комбинироваться);

export { комбинироваться };