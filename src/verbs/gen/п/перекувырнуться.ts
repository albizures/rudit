import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекувырнуться: PerfectVerb = {
  name: Word('перекувырнуться', 10),
  singular1stPerson: Word('перекувырнусь', 10),
  singular2ndPerson: Word('перекувырнёшься', 10),
  singular3rdPerson: Word('перекувырнётся', 10),
  plural1stPerson: Word('перекувырнёмся', 10),
  plural2ndPerson: Word('перекувырнётесь', 10),
  plural3rdPerson: Word('перекувырнутся', 10),
  masculinePast: Word('перекувырнулся', 10),
  femininePast: Word('перекувырнулась', 10),
  neuterPast: Word('перекувырнулось', 10),
  pluralPast: Word('перекувырнулись', 10),
  imperativeInformal: Word('перекувырнись', 10),
  imperativeFormal: Word('перекувырнитесь', 10),
  imperfect: [],
};

perfectVerbs.set(перекувырнуться.name.text, перекувырнуться);

export { перекувырнуться };