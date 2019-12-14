import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const советоваться: PerfectVerb = {
  name: Word('советоваться', 3),
  singular1stPerson: Word('советуюсь', 3),
  singular2ndPerson: Word('советуешься', 3),
  singular3rdPerson: Word('советуется', 3),
  plural1stPerson: Word('советуемся', 3),
  plural2ndPerson: Word('советуетесь', 3),
  plural3rdPerson: Word('советуются', 3),
  masculinePast: Word('советовался', 3),
  femininePast: Word('советовалась', 3),
  neuterPast: Word('советовалось', 3),
  pluralPast: Word('советовались', 3),
  imperativeInformal: Word('советуйся', 3),
  imperativeFormal: Word('советуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(советоваться.name.text, советоваться);

export { советоваться };