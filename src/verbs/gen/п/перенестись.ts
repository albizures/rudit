import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенестись: PerfectVerb = {
  name: Word('перенестись', 8),
  singular1stPerson: Word('перенесусь', 7),
  singular2ndPerson: Word('перенесёшься', 7),
  singular3rdPerson: Word('перенесётся', 7),
  plural1stPerson: Word('перенесёмся', 7),
  plural2ndPerson: Word('перенесётесь', 7),
  plural3rdPerson: Word('перенесутся', 7),
  masculinePast: Word('перенёсся', 5),
  femininePast: Word('перенеслась', 8),
  neuterPast: Word('перенеслось', 8),
  pluralPast: Word('перенеслись', 8),
  imperativeInformal: Word('перенесись', 7),
  imperativeFormal: Word('перенеситесь', 7),
  imperfect: [],
};

perfectVerbs.set(перенестись.name.text, перенестись);

export { перенестись };