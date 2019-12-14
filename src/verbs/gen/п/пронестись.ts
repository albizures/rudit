import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронестись: PerfectVerb = {
  name: Word('пронестись', 7),
  singular1stPerson: Word('пронесусь', 6),
  singular2ndPerson: Word('пронесёшься', 4),
  singular3rdPerson: Word('пронесётся', 4),
  plural1stPerson: Word('пронесёмся', 4),
  plural2ndPerson: Word('пронесётесь', 4),
  plural3rdPerson: Word('пронесутся', 6),
  masculinePast: Word('пронёсся', 2),
  femininePast: Word('пронеслась', 7),
  neuterPast: Word('пронеслось', 7),
  pluralPast: Word('пронеслись', 7),
  imperativeInformal: Word('пронесись', 6),
  imperativeFormal: Word('пронеситесь', 6),
  imperfect: [],
};

perfectVerbs.set(пронестись.name.text, пронестись);

export { пронестись };