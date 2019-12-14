import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смыться: PerfectVerb = {
  name: Word('смыться', 2),
  singular1stPerson: Word('смоюсь', 2),
  singular2ndPerson: Word('смоешься', 2),
  singular3rdPerson: Word('смоется', 2),
  plural1stPerson: Word('смоемся', 2),
  plural2ndPerson: Word('смоетесь', 2),
  plural3rdPerson: Word('смоются', 2),
  masculinePast: Word('смылся', 2),
  femininePast: Word('смылась', 2),
  neuterPast: Word('смылось', 2),
  pluralPast: Word('смылись', 2),
  imperativeInformal: Word('смойся', 2),
  imperativeFormal: Word('смойтесь', 2),
  imperfect: [],
};

perfectVerbs.set(смыться.name.text, смыться);

export { смыться };