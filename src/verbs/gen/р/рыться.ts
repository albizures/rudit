import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыться: PerfectVerb = {
  name: Word('рыться', 1),
  singular1stPerson: Word('роюсь', 1),
  singular2ndPerson: Word('роешься', 1),
  singular3rdPerson: Word('роется', 1),
  plural1stPerson: Word('роемся', 1),
  plural2ndPerson: Word('роетесь', 1),
  plural3rdPerson: Word('роются', 1),
  masculinePast: Word('рылся', 1),
  femininePast: Word('рылась', 1),
  neuterPast: Word('рылось', 1),
  pluralPast: Word('рылись', 1),
  imperativeInformal: Word('ройся', 1),
  imperativeFormal: Word('ройтесь', 1),
  imperfect: [],
};

perfectVerbs.set(рыться.name.text, рыться);

export { рыться };