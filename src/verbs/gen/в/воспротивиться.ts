import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспротивиться: PerfectVerb = {
  name: Word('воспротивиться', 7),
  singular1stPerson: Word('воспротивлюсь', 7),
  singular2ndPerson: Word('воспротивишься', 7),
  singular3rdPerson: Word('воспротивится', 7),
  plural1stPerson: Word('воспротивимся', 7),
  plural2ndPerson: Word('воспротивитесь', 7),
  plural3rdPerson: Word('воспротивятся', 7),
  masculinePast: Word('воспротивился', 7),
  femininePast: Word('воспротивилась', 7),
  neuterPast: Word('воспротивилось', 7),
  pluralPast: Word('воспротивились', 7),
  imperativeInformal: Word('воспротивься', 7),
  imperativeFormal: Word('воспротивьтесь', 7),
  imperfect: [],
};

perfectVerbs.set(воспротивиться.name.text, воспротивиться);

export { воспротивиться };